import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {

    super(props)
    this.ref = React.createRef();
    this.state = {
      clicks: 0
    };
  }


  clickHandler = () => {
    const { clicks } = this.state
    this.setState({
      clicks: clicks + 1
    });
  }


  componentDidMount() {
    this.ref.current.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    this.ref.current.addEventListener('click', this.clickHandler);
  }

  render() {
    let children = this.props.children;
    const { clicks } = this.state
    return (
      <div className="my-component" ref={this.ref}>
        <h2>My Component {clicks} clicks</h2>
        <h3>{this.props.headerText}</h3>
        {children}
      </div>
    );
  }
}