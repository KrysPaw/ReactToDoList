const TaskItem = (props) => {
  return (
    <div className="TaskItem">
      <h3 className={props.item.priority ? "tip" : "tin"}>{props.item.name}</h3>
      <h4>Data wykonania: {props.item.date}</h4>
      <button className="option" onClick={() => props.closeHandler(props.item)}>
        Zakończ
      </button>
      <button
        className="option"
        onClick={() => props.deleteHandler(props.item)}
      >
        X
      </button>
    </div>
  );
};

export default TaskItem;
