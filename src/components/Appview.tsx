import TodoList from "./TodoList";

const AppView: React.FC = () => {
  const name = localStorage.getItem("Name");
  const surname = localStorage.getItem("Surname");

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <main>
        <nav>
          <div>
            <h1>
              {name + " "}
              {surname}
            </h1>
          </div>
          <button onClick={logout}>Wyloguj</button>
        </nav>
        <div className="main">
          <div className="main_title">
            <p>Towar</p>
            <p>Ilość</p>
            <p>Dodający</p>
          </div>
          <div className="main_content">
            <div className="main_size">
              <TodoList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AppView;
