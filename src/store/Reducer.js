import {
  ADD_TODO,
  INIT_TODOS,
  TOGGLE_TODO_COMPLITED,
  ADD_TODO_SUBTASK,
  TOGGLE_SUBTASK_COMPLITED,
  DELETE_TASK,
} from "./types";

const preloadedState = { todos: [] };
export const reducer = (state = preloadedState, action) => {
  switch (action.type) {
    case INIT_TODOS:
      return { ...state, todos: action.payload };

    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case TOGGLE_TODO_COMPLITED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.title === action.payload)
            return {
              ...todo,
              complited: !todo.complited,
            };
          else return todo;
        }),
      };

    case ADD_TODO_SUBTASK:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.title === action.payload.title)
            return {
              ...todo,
              subtasks: todo.subtasks
                ? [...todo?.subtasks, action.payload.subtask]
                : [action.payload.subtask],
            };
          else return todo;
        }),
      };

    case TOGGLE_SUBTASK_COMPLITED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.title === action.payload.todos) {
            return {
              ...todo,
              subtasks: todo.subtasks.map((subtask) => {
                if (subtask.title === action.payload.subtask) {
                  return {
                    ...subtask,
                    complited: !subtask.complited,
                  };
                } else return subtask;
              }),
            };
          } else return todo;
        }),
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.title !== action.payload),
      };

    default:
      return state;
  }
};
