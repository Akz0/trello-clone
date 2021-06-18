import React from 'react'
import { TodoItemContainer } from '../Designs/TodoItems'



export default function TodoItem(props) {
    return (
        <TodoItemContainer onClick={()=>{
            props.clicked({
                todo:props.todo,
                description:props.description,
                status:props.status,
                id:props.id,
                listID:props.listID,
            })
        }} status={props.status}  id={props.id}>
            {props.todo}
        </TodoItemContainer>
    )
}
