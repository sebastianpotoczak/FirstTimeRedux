export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addTodo(todo: any) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(todoId: number) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}
