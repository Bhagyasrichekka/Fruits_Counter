// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncreaseMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncreaseBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1>
            Bob ate <span className="textColor">{mango}</span> Mangoes
            <span className="textColor"> {banana}</span> bananas
          </h1>
          <div className="fruits">
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="imageFruits"
                alt="Mango"
              />
              <button className="btn" onClick={this.onIncreaseMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="imageFruits"
                alt="Banana"
              />
              <button className="btn" onClick={this.onIncreaseBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
