import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button
          style={{
            width: "100px",
            padding: "5px",
            boxSizing: "border-box",
            border: "1px solid green",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={this.props.onStoreResult}
        >
          Store Results
        </button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              style={{
                width: "100px",
                padding: "20px",
                boxSizing: "border-box",
                border: "1px solid blue",
                margin: "16px",
                boxShadow: "0px 2px 2px #ccc",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "pointer",
                display: "inline-block",
              }}
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 10 }),
    onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 15 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: (id) => dispatch({ type: "DELETE_RESULT", resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
