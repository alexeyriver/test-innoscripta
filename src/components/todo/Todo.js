import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InitTodos,
  ToggleTodoComplited,
  AddTodoSubtask,
  ToggleSubtask,
  DeleteTodo,
} from "../../store/Actions";
import UseInput from "../../hooks/UseInput";

function Todo(props) {
  const title = UseInput("");
  const description = UseInput("");
  const dispatch = useDispatch();
  const state = useSelector((store) => store.todos);

  useEffect(() => {
    let todos = localStorage.getItem("state");
    todos = JSON.parse(todos);
    if (todos?.todos) {
      dispatch(InitTodos(todos.todos));
    } else dispatch(InitTodos([]));
  }, []);

  const ToggleHandler = (e) => {
    dispatch(ToggleTodoComplited(e));
  };

  const CreateSubtask = (e) => {
    dispatch(
      AddTodoSubtask({
        title: e,
        subtask: {
          title: title.input,
          description: description.input,
          complited: false,
        },
      })
    );
    
  };

  const ToggleHandlerSubtask = (subtask, todos) => {
    dispatch(ToggleSubtask({ subtask, todos }));
  };

  const DeleteHandler = (e) => {
    dispatch(DeleteTodo(e));
  };
  

  return (
    <div>
     {state.length ? <h3>List of Todos:</h3>: <h3>Create Todo!</h3>} 
      {state &&
        state.map((todos) => (
          <div key={todos.title}>
            <h4>Title: {todos.title} </h4>
            <p>Desc: {todos.description} </p>
            Completed:{" "}
            <input
              type="checkbox"
              checked={todos.complited}
              onChange={() => ToggleHandler(todos.title)}
            />
            {todos.subtasks &&
              todos.subtasks.map((subtask) => (
                <div key={subtask.title}>
                  <h4> Subtask Title: {subtask.title}</h4>
                  <p>
                    Description:
                    {subtask.description}
                  </p>
                  Completed:{" "}
                  <input
                    type="checkbox"
                    checked={subtask.complited}
                    onChange={() =>
                      ToggleHandlerSubtask(subtask.title, todos.title)
                    }
                  />
                </div>
              ))}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                CreateSubtask(todos.title);
              }}
            >
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
              <button>Create Subtask</button>
            </form>
            <button onClick={() => DeleteHandler(todos.title)}>
              Delete Task
            </button>
          </div>
        ))}
    </div>
  );
}

export default Todo;
