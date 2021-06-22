import React from 'react'
import { TodoEdit, TodoItemContainer } from '../Designs/TodoItems'
import { FiEdit } from 'react-icons/fi'


const TodoItem = React.memo((props) => {

    const handleDragStart = (event) => {
        
        const TodoItem = {
            todo: props.todo,
            description: props.description,
            status: props.status,
            id: props.id,
            listID: props.listID,
        }
        props.setDragList(event,TodoItem.listID )
        props.setDragItem(event, TodoItem)
    }
    // handleDrag = (event) => {
    //     console.log('[onDrag] Todo-', event.target.id)
    // }
    const handleDragEnter = (event) => {
        event.target.style.transform = 'scale(1.03)'
    }
    const handleDragLeave = (event) => {
        event.target.style.transform = 'scale(1)'
    }
    const handleDragOver = (event) => {
        event.preventDefault()
    }


    return (

        <TodoItemContainer
            status={props.status}
            id={props.id}
            draggable="true"

            onDragStart={(event) => handleDragStart(event)}
            onDragEnter={(event) => handleDragEnter(event)}
            onDragOver={(event) => handleDragOver(event)}
            onDragLeave={(event) => handleDragLeave(event)}
    
            className='todoCard'

        >
            {props.todo}
            <TodoEdit onClick={() => {
                props.clicked({
                    todo: props.todo,
                    description: props.description,
                    status: props.status,
                    id: props.id,
                    listID: props.listID,
                })
            }}><FiEdit /></TodoEdit>
        </TodoItemContainer>
    )

})
export default TodoItem