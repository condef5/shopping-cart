import React, { Component } from 'react';

class Toast extends Component {

  constructor() {
    super();
    this.state = {
      active: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ active: false})
      this.props.removeToast();
    }, 5000);
  }

  render () {
    const {message} = this.props
    if (!this.state.active) return null;
    return (
      <div className="toast">
        <div className="toast__message">{message}</div>
      </div>
    )
  }
}

export default Toast;
