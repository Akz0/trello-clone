import React, { Component } from 'react'
import ListBoard from './List'
import { Colors, returnColor } from '../Designs/DesignVariables';
import { connect } from 'react-redux';
import { SuccessButton } from '../Designs/Buttons';
import { AddNewListContainer, AddNewListInput, BoardContainer } from '../Designs/Board';
import TodoItemDetails from '../components/TodoItemDetails';
import { Backdrop } from '../Designs/misc';
import { CreateNewList, CreateNewTodo } from '../store/actions';
import ListDetails from '../components/ListDetails';



class Board extends Component {

    state = {
        newListName: '',
        showTodoDetails: true,
        currentTodoDetail: null,
        showListDetails: false,
        currentListDetail: null
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
        const todos = []
        for (var i = 0; i < this.props.todoItems.length; i++) {
            if (this.props.todoItems[i][`listID`] === listID) {
                todos.push(this.props.todoItems[i])
            }
        }
        return todos;
    }

    //Drag Drop Functionality
    

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
        onAddNewTodo: (name, listID) => dispatch(CreateNewTodo(name, listID))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Board)
