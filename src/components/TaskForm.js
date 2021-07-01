import React, { Component } from "react";
import "./App.css";
class TaskForm extends Component {
  state = {};
  render() {
    return (
      <form noValidate className="formBox">
        <label>
          Nazwa:{" "}
          <input
            type="text"
            name="formName"
            onChange={this.props.handler}
            value={this.props.formName}
          />
        </label>
        <label>
          <input
            type="checkbox"
            onChange={this.props.handler}
            checked={this.props.formPriority}
          />
          Priorytet
        </label>
        <label>
          Data wykonania:
          <input
            type="date"
            name="formDate"
            onChange={this.props.handler}
            value={this.props.formDate}
          ></input>
        </label>
        <button type="submit" onClick={this.props.addHandler}>
          Dodaj
        </button>
        <hr />
      </form>
    );
  }
}

export default TaskForm;
