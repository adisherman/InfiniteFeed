import React, {ReactNode} from 'react';
import {ErrorBoundaryProps, ErrorBoundaryState} from './ErrorBoundary.types';

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {error};
  }

  componentDidCatch(error: Error, info: {componentStack: string}) {
    const {onError} = this.props;
    this.setState({error: error});
    if (typeof onError === 'function') {
      onError(this, error, info.componentStack);
    }
  }

  resetError = () => {
    this.setState({error: null});
  };

  render(): ReactNode {
    const {FallbackComponent, children} = this.props;
    const {error} = this.state;
    return error ? (
      <FallbackComponent error={error} resetError={this.resetError} />
    ) : (
      children
    );
  }
}
export default ErrorBoundary;
