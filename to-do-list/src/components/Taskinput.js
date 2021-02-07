import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    addTask = () => {
        const { input } = this.state
        if (input) {
            this.props.addTask(input)
            this.setState({ input: '' })
        }
    }

    inputChange = event => {
        this.setState({input: event.target.value})
    }

    render() {
        const { input } = this.state
        return (
            <div className="task-input">
                <input onChange={this.inputChange} value={input}></input>
                <button onClick={this.addTask}>ADD</button>
            </div>
        )
    }
}


export default TaskInput