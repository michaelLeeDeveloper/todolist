import React, { Component } from 'react'
import './Task.css';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            taskName: this.props.taskName
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeCompleted = this.changeCompleted.bind(this);
    }

    handleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleRemove() {
        this.props.removeTask(this.props.id);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.editTask(this.props.id, this.state.taskName);
        this.handleEdit();
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    changeCompleted() {
        this.props.changeCompleted(this.props.id);
    }

    render() {
        const taskName = this.props.taskName
        return (
            <div className="Todo">
                {this.state.isEditing
                    ? <div className="Todo-edit-form"><form onSubmit={this.handleSubmit}><input type="text" value={this.state.taskName} name="taskName" onChange={this.handleChange} /><button>Submit Task</button></form></div>
                    : <li onClick={this.changeCompleted} className={this.props.completed
                        ? "completed Todo-task"
                        : "Todo-task"}>{taskName}</li>}
                <div className="Todo-buttons">
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                </div>
            </div>
        )
    }
}
