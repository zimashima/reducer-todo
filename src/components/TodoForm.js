import React from 'react'


export default function TodoForm(props){

    return(
        <div className="card bg-light p-3 mx-auto" style={{maxWidth: 800}}>
            <h3 className="m-4 text-center">Help us remind Santa if he misses anything! </h3>
            <form onSubmit={props.handleSubmit}>
                <div class="form-group d-flex justify-content-between">
                    <div className="col-md-9">
                        <input type="text" class="form-control" id="addTodo" placeholder="Add a new task" onChange={props.handleChanges} value={props.newTask}/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" class="form-control" id="addDate" placeholder="Complete by" onChange={props.handleDateText} value={props.dateText} />
                    </div>
                </div>
                <div className="d-flex justify-content-center"><button type="submit" className="btn btn-success m-2">Add Task</button>
                    <button className="btn btn-secondary m-2" onClick={props.handleCompleted}>Clear Completed</button>
                </div>
            
            </form>
        </div>
    )
}