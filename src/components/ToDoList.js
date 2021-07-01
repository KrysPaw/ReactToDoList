import React, { Component } from "react";
import TaskItem from "./TaskItem";

class ToDoList extends Component {
  state = {};
  render() {
    let list = this.props.list;
    console.log(list);
    list.sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log(list);
    list = list.map((item) => (
      <TaskItem
        key={item.id}
        item={item}
        deleteHandler={this.props.deleteHandler}
        closeHandler={this.props.closeHandler}
      />
    ));
    console.log(list);
    return (
      <>
        <h1>Zadania do zrobienia</h1>
        {this.props.list.length === 0 ? "Lista jest pusta" : list}
        <hr />
      </>
    );
  }
}

export default ToDoList;
