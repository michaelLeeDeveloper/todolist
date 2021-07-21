import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "../src/TaskForm.css";


export default class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        const id = uuidv4();
        evt.preventDefault();
        this.props.makeTask({ ...this.state, id, completed: false });
        this.setState({ task: "" })
    }
    render() {
        return (
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label>New Task:</label>
                    <input type="text" placeholder="New Task" id="task" name="task" value={this.state.task} onChange={this.handleChange} />
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}
