import React from 'react'

export default function TodoForm(){
    return(
        <div>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="addTodo" placeholder="Add a new task" />
                    <button className="btn btn-primary">Add Task</button>
                </div>
            </form>
        </div>
    )
}