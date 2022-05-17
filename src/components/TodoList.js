import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  let todos = useSelector((state) => state);

////Tutaj nie wiem dlaczego przy typescript todo nie działa :((((
  return (
    <>
      {todos.map((todo) => {
        return <TodoItem key={todos.id} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;




