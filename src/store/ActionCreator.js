import {
  ADD_TODO,
  INIT_TODOS,
  TOGGLE_TODO_COMPLITED,
  ADD_TODO_SUBTASK,
  TOGGLE_SUBTASK_COMPLITED,
  DELETE_TASK,
} from "./types";

export const addTodoAC = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const initTodosAC = (payload) => ({
  type: INIT_TODOS,
  payload,
});

export const ToggleTodoAC = (payload) => ({
  type: TOGGLE_TODO_COMPLITED,
  payload,
});

export const addTodoSubtaskAC = (payload) => ({
  type: ADD_TODO_SUBTASK,
  payload,
});

export const toggleSubtaskAC = (payload) => ({
  type: TOGGLE_SUBTASK_COMPLITED,
  payload,
});

export const deleteTodoAC = (payload) => ({
  type: DELETE_TASK,
  payload,
});
