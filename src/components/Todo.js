import React from 'react';


export default function Todo(props){
    console.log(props)
    return(
        <li className={`list-group-item list-group-item-action ${props.todo.completed ? 'list-group-item-success' : ''} d-flex justify-content-between align-items-center`} onClick={()=> props.toggleComplete(props.todo.id)}>
            {props.todo.item}
            <span class="badge badge-warning badge-pill">{props.todo.complete_by}</span>
        </li>
    )
}