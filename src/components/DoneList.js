import React, { Component } from "react";
import DoneTaskItem from "./DoneTaskItem";
class DoneList extends Component {
  state = {};
  render() {
    const list = this.props.list
      .map((item) => (
        <DoneTaskItem
          key={item.id}
          item={item}
          deleteHandler={this.props.deleteHandler}
        />
      ))
      .slice(0, 5);
    return (
      <>
        <h1>Zadania zrobione ({this.props.list.length})</h1>
        {this.props.list.length === 0 ? "Lista jest pusta" : list}
        <hr />
      </>
    );
  }
}

export default DoneList;
