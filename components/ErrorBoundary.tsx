import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
                    <div className="max-w-xl w-full bg-gray-800 p-8 rounded-lg shadow-xl border border-red-500">
                        <h1 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h1>
                        <p className="mb-4 text-gray-300">The application crashed. Here is the error:</p>
                        <pre className="bg-black p-4 rounded overflow-auto text-sm font-mono text-red-400 mb-4">
                            {this.state.error?.toString()}
                        </pre>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
