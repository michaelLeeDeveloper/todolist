import React, { Component } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import "./List.css";


export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTasks: []
        }
        this.makeTask = this.makeTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.changeCompleted = this.changeCompleted.bind(this);
    }

    makeTask(task) {
        this.setState({
            allTasks: [...this.state.allTasks, task]
        });
    }

    removeTask(id) {
        this.setState({
            allTasks: this.state.allTasks.filter(task => task.id !== id)
        });
    }


    editTask(id, updatedTask) {
        const newTasks = this.state.allTasks.map(task => {
            if (task.id === id) {
                return { ...task, task: updatedTask }
            } else return task;
        })
        this.setState({
            allTasks: newTasks
        })
    }

    changeCompleted(id) {
        const newTasks = this.state.allTasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            } else return task;
        })
        this.setState({
            allTasks: newTasks
        })
    }
    render() {
        const tasks = this.state.allTasks.map(task => {
            return (
                <Task key={task.id} id={task.id} taskName={task.task} removeTask={this.removeTask} editTask={this.editTask} completed={task.completed} changeCompleted={this.changeCompleted} />
            )
        })
        return (
            <div className="TodoList">
                <h1>To Do List! <span>A Simple React App</span></h1>
                <ul>{tasks}</ul>
                <TaskForm makeTask={this.makeTask} />
            </div>
        )
    }
}
