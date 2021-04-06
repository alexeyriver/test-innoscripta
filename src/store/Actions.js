import {
  addTodoAC,
  initTodosAC,
  ToggleTodoAC,
  addTodoSubtaskAC,
  toggleSubtaskAC,
  deleteTodoAC
} from "./ActionCreator";

export const AddingTodo = (payload) => (dispatch) => {
  dispatch(addTodoAC(payload));
};

export const InitTodos = (payload) => (dispatch) => {
  dispatch(initTodosAC(payload));
};

export const ToggleTodoComplited = (payload) => (dispatch) => {
  dispatch(ToggleTodoAC(payload));
};

export const AddTodoSubtask = (payload) => (dispatch) => {
  dispatch(addTodoSubtaskAC(payload));
};

export const ToggleSubtask = (payload) => (dispatch) => {
  dispatch(toggleSubtaskAC(payload))
}

export const DeleteTodo = (payload) => (dispatch) => {
  dispatch(deleteTodoAC(payload))
}
