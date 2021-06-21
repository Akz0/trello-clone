import React, { useState } from 'react'
import TodoItem from '../components/TodoItem';
import { SuccessButton } from '../Designs/Buttons';
import { AddNewTodoContainer, ListContainer, ListMenu, ListTitle, TodosContainer, AddNewTodoInput } from '../Designs/Lists';
import { RiSettingsLine } from 'react-icons/ri'

const ListBoard = React.memo(props => {
    const [newTodoName, setNewTodoName] = useState('')
    const handleNewTodoName = (e) => {
        const newName = e.target.value
        setNewTodoName(newName)
    }
    const showAddTodoButtonOnClick = (event) => {
        const button = document.querySelector(`#add-new-todo-button${props.listID}`)
        if (event.target.id === `add-new-todo-input${props.listID}`) {
            button.style.display = "flex"
        } else {
            button.style.display = "none"
        }
    }
    const addTodo = (event, id) => {
        event.preventDefault()
        if (newTodoName && newTodoName.trim()) {
            props.addNewTodo(newTodoName, id)
            setNewTodoName('')
        }
    }

<<<<<<< HEAD
    // Drag and Drop
    onDrop = (event) => {
        event.preventDefault()
        const cardID = event.dataTransfer.getItem('cardID')
        const card = document.getElementById(cardID)
        event.target.appendChild(card)
    }
    onDrag = (event) => {
        event.preventDefault()
    }
    render() {
        const todos = this.props.todos.map((item, index) => {
            return <TodoItem
                key={item.id}
                index={index}

                id={item.id}
                todo={item.todo}
                status={item.status}
                description={item.description}
                listID={item.listID}

                clicked={this.props.todoClicked}
            />
        });




        return (
            <div>
                <ListContainer bgColor={this.props.bgColor} id={this.props.id}>
                    <ListTitle><span>{this.props.name}</span> <ListMenu onClick={this.props.openListDetails}><RiSettingsLine /></ListMenu></ListTitle>

                    <TodosContainer>
                        <div style={{ width: '100%' }}>
                            {todos}
                        </div>
                    </TodosContainer>

                    <form style={{ width: '100%' }} onSubmit={(event) => this.addTodo(event, this.props.listID)}>
                        <AddNewTodoContainer>
                            <AddNewTodoInput
                                type="text"
                                id={`add-new-todo-input${this.props.listID}`}
                                onClick={(event) => this.showAddTodoButtonOnClick(event)}
                                onInput={(event) => this.handleNewTodoName(event)}
                                placeholder={`Add Another Card`}
                                autoComplete="off"
                                value={this.state.newTodoName}
                            />
                            <SuccessButton id={`add-new-todo-button${this.props.listID}`} hiddenDisplay type="submit">Add</SuccessButton>
                        </AddNewTodoContainer>
                    </form>
                </ListContainer>
            </div>
        )
=======
    // Drag and Drop stuff
    // const handleDragStart = (event) => {
    //     console.log('[onDragStart] list-', event.target.id)
    // }
    // handleDrag = (event) => {
    //     console.log('[onDrag] Todo-', event.target.id)
    // }
    // handleDragEnter = (event) => {
    //     console.log('[onDragEnter] List-', event.target.id)
    // }
    // const handleDragLeave = (event) => {
    //     console.log('[onDragLeave] List -', event.target.id)
    // }

    const handleDragOver = (event, id) => {
        event.preventDefault()
        const findAncestor = () => {
            let el = event.target
            let found = false
            while (found !== true) {
                if (el.classList.contains('todosList')) {
                    found = true
                    return found
                }
                else {
                    el = el.parentElement
                }
            };
        }
        if (event.target.classList.contains('todosList') || findAncestor()) {
            props.setDragOnList(event, id)
        }
    }
    const handleDrop = (event) => {
        event.stopPropagation()
        props.moveComplete()
        // const task = document.getElementById(event.dataTransfer.getData('taskID'))
        // event.target.appendChild(task)
        // console.log('[onDrop] Dropped In List -', event.target.id)
        return false
>>>>>>> testing
    }



    const todos = props.todos.map((item, index) => {
        return <TodoItem
            key={item.id}
            index={index}

            id={item.id}
            todo={item.todo}
            status={item.status}
            description={item.description}
            listID={item.listID}

            clicked={props.todoClicked}
            setDragItem={props.setDragItem}
            setDragList={props.setDragFromList}

        />
    });




    return (
        <div>
            <ListContainer
                draggable="false"
                bgColor={props.bgColor}
                id={props.listID}
                onDrop={(event) => handleDrop(event)}
                onDragOver={(event) => handleDragOver(event, props.listID)}
                className='todosList'
            >

                <ListTitle><span>{props.name}</span> <ListMenu onClick={props.openListDetails}><RiSettingsLine /></ListMenu></ListTitle>

                <TodosContainer

                >
                    {todos}
                </TodosContainer>

                <form style={{ width: '100%' }} onSubmit={(event) => addTodo(event, props.listID)}>
                    <AddNewTodoContainer>
                        <AddNewTodoInput
                            type="text"
                            id={`add-new-todo-input${props.listID}`}
                            onClick={(event) => showAddTodoButtonOnClick(event)}
                            onInput={(event) => handleNewTodoName(event)}
                            placeholder={`Add Another Card`}
                            autoComplete="off"
                            value={newTodoName}
                        />
                        <SuccessButton id={`add-new-todo-button${props.listID}`} hiddenDisplay type="submit">Add</SuccessButton>
                    </AddNewTodoContainer>
                </form>


            </ListContainer>
        </div>
    )

})
export default ListBoard
