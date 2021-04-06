import React from "react";
import UseInput from "../../hooks/UseInput";
import { useDispatch } from "react-redux";
import { AddingTodo } from "../../store/Actions";

function NewTodo(props) {
  const dispatch = useDispatch();
  const title = UseInput("");
  const description = UseInput("");
  const HandlerSubmit = e => {
    e.preventDefault();
    dispatch(
      AddingTodo({
        title: title.input,
        description: description.input,
        complited: false,
        subtasks: [],
      })
    );
  };

  return (
    <div>
    <h2>  Add Todo</h2>
      <form onSubmit={HandlerSubmit}>
        <input
          {...title}
          type="text"
          placeholder="Title"
          value={title.value}
        ></input>
        <input
          {...description}
          type="text"
          placeholder="Description"
          value={description.value}
        ></input>
        <button>Create</button>
      </form>
    </div>
  );
}

export default NewTodo;
