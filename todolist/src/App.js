import React, {useReducer, useState} from 'react';


import {reducer, initialState} from './reducers/todoReducer'

//components
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [newTask, setNewTask] = useState('')
  const [dateText, setNewDate] = useState('')

  console.log(state)

  const handleChanges = e => {
      setNewTask(e.target.value);
    };

  const handleDateText = e => {
    setNewDate(e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault()
      dispatch({ type: 'ADD_TODO', payload: [newTask, dateText]})
      setNewTask('')
      setNewDate('')
  }
  const toggleComplete = id =>{
    dispatch({type: 'TOGGLE_COMPLETE', payload: id})
  }
  const handleCompleted = e =>{
    e.preventDefault()
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className="container">
      <h1 className="m-4"> Santa Claus To-do List</h1>
      {
        state.todo.map(task=>(
          <Todo todo={task} toggleComplete={toggleComplete}/>
        ))
      }
      <h3 className="m-4">Help us remind Santa if he misses anything! </h3>
      <TodoForm handleSubmit={handleSubmit} handleChanges={handleChanges} newTask={newTask} handleCompleted={handleCompleted} handleDateText={handleDateText}/>
    </div>
  );
}

export default App;
