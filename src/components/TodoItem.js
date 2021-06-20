import React, { Component } from 'react'
import { TodoEdit, TodoItemContainer } from '../Designs/TodoItems'
import { FiEdit } from 'react-icons/fi'


export default class TodoItem extends Component {

    render() {

        return (

            <TodoItemContainer
                status={this.props.status}
                id={this.props.id}
                className={'TodoCard'}
            >
                {this.props.todo}
                <TodoEdit onClick={() => {
                    this.props.clicked({
                        todo: this.props.todo,
                        description: this.props.description,
                        status: this.props.status,
                        id: this.props.id,
                        listID: this.props.listID,
                    })
                }}><FiEdit /></TodoEdit>
            </TodoItemContainer>


        )
    }
}
