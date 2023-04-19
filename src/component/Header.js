import useTodoContext from "../hooks/use-todo-context";

function Header() {
  const { todos } = useTodoContext()

  return (
    <header>
      <h1>To-Do App</h1>
      <span className="count">{todos.length
        ? <span>{todos.length} tasks left</span>
        : null}
      </span>
    </header >
  );
}

export default Header;