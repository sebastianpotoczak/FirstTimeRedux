import React, { useState } from "react";

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    const newName = e.currentTarget.value;
    setName(newName);
  };
  const handleSurname = (e: React.FormEvent<HTMLInputElement>) => {
    const newSurname = e.currentTarget.value;
    setSurname(newSurname);
  };
  const handleClick = () => {
    localStorage.setItem("Surname", surname);
    localStorage.setItem("Name", name);
  };

  return (
    <>
      <div className="login">
        <form className="login_form" onSubmit={handleClick}>
          <div className="login_contain">
            <p>Imię</p>
            <input type="text" value={name} onChange={handleName} />
            <p>Nazwisko</p>
            <input type="text" value={surname} onChange={handleSurname} />
            <input type="submit" value="Zaloguj" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
