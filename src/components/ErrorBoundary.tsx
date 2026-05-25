import React, { ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, ChevronRight, Home } from 'lucide-react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  private handleBackHome = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-white rounded-2xl border border-blue-100 shadow-xl p-8 space-y-6 text-center animate-in fade-in duration-300">
            <div className="w-14 h-14 bg-rose-50 border border-rose-100 rounded-2xl flex items-center justify-center text-rose-500 mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-rose-500 uppercase">
                SYSTEM EXCEPTION DETECTED
              </span>
              <h2 className="font-display font-bold text-xl text-blue-950">
                Application Interrupted
              </h2>
              <p className="text-xs text-blue-900/60 max-w-sm mx-auto leading-relaxed">
                We encountered an unexpected visual issue. Don't worry, your data and selections have been saved. Let's refresh the application to resume.
              </p>
            </div>

            {this.state.error && (
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                <span className="text-[9px] font-mono text-slate-400 block uppercase mb-1">
                  Technical Log
                </span>
                <p className="font-mono text-[10px] text-slate-600 line-clamp-2 break-all">
                  {this.state.error.message || 'Unknown runtime render exception'}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="py-3 bg-primary-custom hover:bg-blue-600 active:scale-[0.98] text-white font-bold rounded-xl text-xs font-mono tracking-wide flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shadow-primary-custom/10"
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                Reload View
              </button>

              <button
                type="button"
                onClick={this.handleBackHome}
                className="py-3 bg-blue-50 hover:bg-blue-100/80 hover:border-blue-200 active:scale-[0.98] text-primary-custom border border-blue-100 font-bold rounded-xl text-xs font-mono tracking-wide flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" />
                Back to Home
              </button>
            </div>

            <div className="pt-4 border-t border-blue-50/50 flex justify-between items-center text-[10px] text-blue-900/40">
              <span>If issue persists, contact:</span>
              <span className="font-semibold text-primary-custom">midusab@gmail.com</span>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
