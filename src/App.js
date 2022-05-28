import React from 'react';
import './App.css';

function Todo({todo, index, completeTodo, removeTodo}){
  return(
    <div 
      className='todo'
      style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Completed</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

function TodoFrom({addTodo}){
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
        type = "text"
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  // The hook of useState is what React uses to hook into the state or lifecycle of the component. 
  const [todos, setTodos] = React.useState([
    {text: "Learn about React",
    isCompleted: false
    },
    {text: "Do your daily task",
    isCompleted: false
    },
    {text: "Build cool todo app",
    isCompleted:false
    }
  ]);
  const addTodo = text =>{
    // The three dots before the todos copy the list for you so that you are able to add on the new to-do item.
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }
  // Completed Todo
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  // Remove Todo
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className='todo-list'>
      {/* By using the JavaScript method, map(), you will be able to create a new array of items by mapping over the todo items from state and displaying them by index. */}
        {todos.map((todo, index) => (
        <Todo
          key = {index}
          index = {index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoFrom addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;

// Implemented all four aspects of CRUD.

