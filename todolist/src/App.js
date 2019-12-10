import React from 'react';

//components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="container">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
