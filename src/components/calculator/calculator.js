import './calculator.css';
import React, { Component } from "react";
import ButtonPanel from "./ButtonPanel";

class Calculator extends Component {
    render() {
      return (
        <div className="calc-area">
            <div className="App">
                <ButtonPanel />
            </div>
        </div>
      );
    }
  }

export default Calculator;