import React from 'react';
import Error from '../styleguide/Core/Error';

type State = {
  error?: any;
};

class ErrorBoundary extends React.Component<any, State> {
  constructor(props:any) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <Error message={error.toString()} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
