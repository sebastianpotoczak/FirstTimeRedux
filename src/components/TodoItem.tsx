import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";

const TodoItem: React.FC = ({ todo }: any) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <div className="main_element">
              <p>{todo.name}</p>
              <p>{todo.quantity}</p>
              <p>{todo.adding}</p>
            </div>
          )}
        </div>
        <button
          className="button"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
