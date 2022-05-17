import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoInput: React.FC = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const nameLocal = localStorage.getItem("Name");
  const surname = localStorage.getItem("Surname");

  let fullName = nameLocal + " " + surname;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.currentTarget.value);
  };
  const handleClick = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        name: name,
        quantity: quantity,
        adding: fullName,
      })
    );
    setName("");
    setQuantity("");
  };
  return (
    <div>
      <div className="form">
        <p>Nazwa towaru</p>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          className="col form-control"
        />
        <p>Ilość</p>
        <input value={quantity} type="number" onChange={handleChanges} />
        <button className="add_button" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
