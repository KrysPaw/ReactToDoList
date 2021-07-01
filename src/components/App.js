import React, { Component } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import ToDoList from "./ToDoList";
import DoneList from "./DoneList";

class App extends Component {
  state = {
    todolist: [],

    formName: "",
    formPriority: false,
    formDate: "",
    currentId: 0,
  };

  handleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({
        formPriority: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleAdd = (e) => {
    e.preventDefault();
    const todolist = this.state.todolist;
    todolist.push(
      new Task(
        this.state.currentId,
        this.state.formName,
        this.state.formPriority,
        this.state.formDate
      )
    );
    this.setState({
      todolist,
      currentId: this.state.currentId + 1,
    });
  };

  handleDelete = (item) => {
    const todolist = this.state.todolist.filter((task) => task.id !== item.id);
    this.setState({
      todolist,
    });
  };

  handleClosing = (item) => {
    const todolist = this.state.todolist.map(function (task) {
      const date = new Date();
      if (task.id === item.id) {
        task.doneDate = `${date.getFullYear()}-${String(
          date.getMonth() + 1
        ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      }
      return task;
    });
    this.setState({
      todolist,
    });
  };

  render() {
    return (
      <div className="App">
        <TaskForm
          handler={this.handleChange.bind(this)}
          addHandler={this.handleAdd.bind(this)}
          formName={this.state.formName}
          formDate={this.state.formDate}
          formPriority={this.state.formPriority}
        />
        <ToDoList
          list={this.state.todolist.filter((item) => item.doneDate === null)}
          deleteHandler={this.handleDelete.bind(this)}
          closeHandler={this.handleClosing.bind(this)}
        />
        <DoneList
          list={this.state.todolist.filter((item) => item.doneDate !== null)}
          deleteHandler={this.handleDelete.bind(this)}
        />
      </div>
    );
  }
}

class Task {
  constructor(id, name, priority, date) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.date = date;
    this.doneDate = null;
  }
}

export default App;
