import React from 'react'
// import PropTypes from 'prop-types'



class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return <div>
            <h1>Counter</h1>

            <h3>{this.props.header}</h3>
            <p>current count: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button>
            <button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
          </div>
  }
}

// Specifies the default values for props:
Counter.defaultProps = {
header: 'This is the Counter component itself',
color: 'black'
}

export default Counter
