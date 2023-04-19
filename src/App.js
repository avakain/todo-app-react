import AddTodo from "./component/AddTodo"
import Header from "./component/Header";
import Footer from "./component/Footer";
import ToDoList from "./component/ToDoList";




function App() {



  return (
    <div className="container">
      <Header />
      <AddTodo />
      <ToDoList />
      <Footer />

    </div>
  );
}

export default App