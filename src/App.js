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
      
      <h1 className="m-4 text-white text-center"> Santa Claus To-do List</h1>
      <div className="d-flex align-items-end p-3 flex-wrap">
      <div className="col-md-9">
      {
        state.todo.map(task=>(
          <Todo todo={task} toggleComplete={toggleComplete}/>
        ))
      }
      </div>
      <div className="col-md-3">
        <img style={{width: '100%'}}src="https://cdn.pixabay.com/photo/2017/03/21/21/28/santa-claus-2163392_960_720.png" alt="cute Santa illustration" />
      </div>
      </div>
      
      <TodoForm handleSubmit={handleSubmit} handleChanges={handleChanges} newTask={newTask} handleCompleted={handleCompleted} handleDateText={handleDateText}/>
      
    </div>
  );
}

export default App;
