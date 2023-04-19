import { createContext, useState, useEffect } from "react";

const ToDoContext = createContext();

function Provider({ children }) {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getLocal = localStorage.getItem('toDos')
    if (getLocal !== null) {
      const getJson = JSON.parse(getLocal)
      setTodos(getJson)
    }
  }, [])

  const getLocalStorage = () => {
    const getLocal = localStorage.getItem('toDos')
    return JSON.parse(getLocal)
  }

  const createLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  const createTodo = (addTodo) => {
    const updateToDo = [
      ...todos, { toDoName: addTodo, isComplite: false, id: Math.floor(Math.random() * 9999) }
    ];
    createLocalStorage('toDos', updateToDo)
    setTodos(updateToDo);
  }

  const editToDo = (id, newName) => {
    const updateToDo = getLocalStorage().map((todo) => {
      if (todo.id === id) {
        return todo = { ...todo, toDoName: newName }
      } else {
        return todo;
      }
    })
    createLocalStorage('toDos', updateToDo)
    setTodos(updateToDo);
  }

  const isComplite = (id, value) => {
    const updateToDo = getLocalStorage().map((todo) => {
      if (todo.id === id) {
        return todo = { ...todo, isComplite: value }
      } else {
        return todo;
      }
    })
    createLocalStorage('toDos', updateToDo)
    setTodos(updateToDo);
  }

  const deleteToDoById = (id) => {
    const updatedToDos = getLocalStorage().filter(todo => todo.id !== id);
    createLocalStorage('toDos', updatedToDos);
    setTodos(updatedToDos);
  }


  const valueToShare = {
    createTodo,
    todos,
    deleteToDoById,
    editToDo,
    isComplite,
  }

  return (
    <ToDoContext.Provider value={valueToShare}>
      {children}
    </ToDoContext.Provider>
  )
}

export default ToDoContext;
export { Provider };