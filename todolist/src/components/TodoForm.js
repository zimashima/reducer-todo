import React from 'react'


export default function TodoForm(props){

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div class="form-group">
                    <input type="text" class="form-control" id="addTodo" placeholder="Add a new task" onChange={props.handleChanges} value={props.newTask}/>
                    <input type="text" class="form-control" id="addDate" placeholder="Add complete by date" onChange={props.handleDateText} value={props.dateText} />
                    <div className="d-flex justify-content-center"><button type="submit" className="btn btn-primary m-2">Add Task</button>
                    <button className="btn btn-secondary m-2" onClick={props.handleCompleted}>Clear Completed</button>
                    </div>
                </div>
            </form>
        </div>
    )
}