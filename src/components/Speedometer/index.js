// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    console.log('onIncrement is clicked')

    this.setState(prevState => {
      if (prevState.speed === 200) {
        return {speed: 200}
      }
      return {speed: prevState.speed + 10}
    })
  }

  onDecrement = () => {
    console.log('onDecrement is clicked')
    this.setState(prevState => {
      if (prevState.speed === 0) {
        return {speed: 0}
      }
      return {speed: prevState.speed - 10}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h1 className="heading2">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons">
          <button type="button" className="button1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
