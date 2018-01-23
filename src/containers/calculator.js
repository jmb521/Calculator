import React, {Component} from 'react';


class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      display = "",
      total = "",

    }
  }
  render() {
    return(
      <div className="calculator">
        <div className="display">
          <Display />
        </div>
        <div className="calculator-buttons">

        </div>
      </div>
    )
  }
}

export default Calculator
