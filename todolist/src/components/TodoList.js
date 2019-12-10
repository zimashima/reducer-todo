import React from 'react'

import Todo from './Todo'

export default function TodoList(){
    return(
        <div className="card" style={{maxWidth: 800}}>
            <div class="card-body">
            <h3 class="card-title">My Todo List</h3>
            <p class="card-text">Recreate Todo List with React</p>
            <p class="card-text">Learn Bootstrap</p>
            <p class="card-text">Incorporate Reducers into the project</p>
            </div>
        </div>
    )
}