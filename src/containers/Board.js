import React, { Component } from 'react'
import ListBoard from './List'
import { Colors, returnColor } from '../Designs/DesignVariables';
import { connect } from 'react-redux';
import { SuccessButton } from '../Designs/Buttons';
import { AddNewListContainer, AddNewListInput, BoardContainer } from '../Designs/Board';
import TodoItemDetails from '../components/TodoItemDetails';
import { Backdrop } from '../Designs/misc';
import { CreateNewList, CreateNewTodo, TodoListChange } from '../store/actions';
import ListDetails from '../components/ListDetails';
import _ from 'lodash';

class Board extends Component {

    state = {
        newListName: '',
        showTodoDetails: true,
        currentTodoDetail: null,
        showListDetails: false,
        currentListDetail: null,

        dragItem: null,
        dragged: null,
        draggedFromListID: '',
        draggedOnListID: '',
    }

    addNewList = (e) => {
        e.preventDefault();
        const bgColor = returnColor(Colors.nonGreyScale)
        if (this.state.newListName && this.state.newListName.trim()) {
            this.props.onAddNewList(this.state.newListName, this.props.boardID, bgColor)

            this.setState({ newListName: '' })
        }
    }
    addNewTodo = (name, id) => {
        this.props.onAddNewTodo(name, id)
    }

    showAddListButtonOnClick = (event) => {
        const button = document.querySelector('#add-new-list-button')
        if (event.target.id === "add-new-list-input") {
            button.style.display = "flex"
        } else {
            button.style.display = "none"
        }
    }

    handleNewListName = (e) => {
        const newName = e.target.value
        this.setState({ newListName: newName })
    }
    // Handling Todo Details Modal
    CloseTodoDetails = () => {
        this.setState({ showTodoDetails: false, currentTodoDetail: null })
    }
    openTodoDetails = (todoItem) => {
        this.setState({ currentTodoDetail: todoItem, showTodoDetails: true })
    }
    renderTodoDetails = () => {
        if (!this.state.currentTodoDetail) {
            return null
        } else {
            return (
                <Backdrop show={this.state.showTodoDetails}>
                    <TodoItemDetails
                        closeDetails={this.CloseTodoDetails}
                        todoDetail={this.state.currentTodoDetail}
                    />
                </Backdrop>
            )
        }
    }

    // Handling List Details Modal
    CloseListDetails = () => {
        this.setState({ showListDetails: false, currentListDetail: null })
    }
    openListDetails = (ListItem) => {
        this.setState({ currentListDetail: ListItem, showListDetails: true })
    }
    renderListDetails = () => {
        if (!this.state.currentListDetail) {
            return null
        } else {
            return (
                <Backdrop show={this.state.showListDetails}>
                    <ListDetails
                        closeDetails={this.CloseListDetails}
                        Details={this.state.currentListDetail}
                    />
                </Backdrop>
            )
        }
    }

    //get Todos for Specific Lists
    getTodoItems = (listID) => {

        for (var i = 0; i < this.props.todoItems.length; i++) {
            if (this.props.todoItems[i][`listID`] === listID) {
                return _.cloneDeep(this.props.todoItems[i].items)

            }
        }

    }

    //Drag Drop Functionality
    //set drag Data
    setDragFromList = (event, item) => {
        this.setState({ draggedFromListID: item })
    }
    setDragOnList = (event, item) => {
        this.setState({ draggedOnListID: item })
    }
    setDragItem = (event, todo) => {
        this.setState({ dragTodo: todo })
    }
    ChangeTodoList = () => {
        if (this.state.draggedFromListID === this.state.draggedOnListID) {
           return
        } else {
            this.props.onMoveTodoComplete(this.state.draggedFromListID, this.state.draggedOnListID, this.state.dragTodo)
        }
        document.querySelectorAll('.todoCard').forEach(item => {
            item.style.transform = 'scale(1)'
        })

    }

    render() {
        const listsBoard = this.props.lists.map(item => {
            return <ListBoard

                bgColor={item.bgColor}
                key={item.listID}
                listID={item.listID}
                name={item.name}
                todos={this.getTodoItems(item.listID)}

                openListDetails={() => this.openListDetails({
                    boardID: item.boardID,
                    listID: item.listID,
                    name: item.name,
                    description: item.description,
                    bgColor: item.bgColor
                })}

                handleNewTodoName={this.handleNewTodoName}
                newTodoInputValue={this.state.newTodoName}
                addNewTodo={this.addNewTodo}
                todoClicked={this.openTodoDetails}

                setDragFromList={this.setDragFromList}
                setDragOnList={this.setDragOnList}
                setDragItem={this.setDragItem}

                moveComplete={this.ChangeTodoList}

            />
        })
        return (
           
            <div onClick={(event) => this.showAddListButtonOnClick(event)}>
                <BoardContainer>
                    {listsBoard}
                    <AddNewListContainer onSubmit={this.addNewList}>
                        <AddNewListInput
                            id="add-new-list-input"
                            onClick={(event) => this.showAddListButtonOnClick(event)}
                            onInput={(event) => this.handleNewListName(event)}
                            type="text"
                            placeholder={`Add New List`}
                            value={this.state.newListName}
                            autoComplete="off"
                        />
                        <SuccessButton dark id="add-new-list-button" hiddenDisplay type="submit">Add</SuccessButton>
                    </AddNewListContainer>
                    {this.renderTodoDetails()}
                    {this.renderListDetails()}
                </BoardContainer>
            </div>
            
        )
    }
}

const mapStatetoProps = state => {
    return {
        todoItems: state.todoItems.todoItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewList: (name, boardID, bgColor) => dispatch(CreateNewList(name, boardID, bgColor)),
        onAddNewTodo: (name, listID) => dispatch(CreateNewTodo(name, listID)),
        onMoveTodoComplete: (fromListID, toListID, TodoItem) => dispatch(TodoListChange(fromListID, toListID, TodoItem))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Board)
