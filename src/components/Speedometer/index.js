// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="speedometer"
          />
          <h1 className="para">Speed is {speed}mph</h1>
          <p className="para2">min limit is 0mph, max limit is 200mph</p>
          <div>
            <button
              onClick={this.onAccelerate}
              type="button"
              className="accelerate-button"
            >
              Accelerate
            </button>
            <button
              onClick={this.onApplyBrake}
              type="button"
              className="apply-button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
