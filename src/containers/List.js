import React, { Component } from 'react'
import TodoItem from '../components/TodoItem';
import { SuccessButton } from '../Designs/Buttons';
import { AddNewTodoContainer, ListContainer, ListMenu, ListTitle, TodosContainer,AddNewTodoInput } from '../Designs/Lists';
import{RiSettingsLine} from 'react-icons/ri'

class ListBoard extends Component {
    state={
        newTodoName:''
    }
    handleNewTodoName=(e)=>{
        const newName=e.target.value
        this.setState({newTodoName:newName})
    }
    showAddTodoButtonOnClick = (event) => {
        const button = document.querySelector(`#add-new-todo-button${this.props.listID}`)
        if (event.target.id ===`add-new-todo-input${this.props.listID}`) {
            button.style.display = "flex"
        } else {
            button.style.display = "none"
        }
    }
    addTodo=(event,id)=>{
        event.preventDefault()
        if (this.state.newTodoName && this.state.newTodoName.trim()) {
            this.props.addNewTodo(this.state.newTodoName,id)
            this.setState({newTodoName:''})
        }
    }

    render() {
        const todos = this.props.todos.map(item => {
            return <TodoItem 
            key={item.id} 
            id={item.id} 
            status={item.status} 
            todo={item.todo} 
            description={item.description}
            listID={this.props.listID}
            clicked={this.props.todoClicked}
            />
        });
        return (
            <div>
                <ListContainer bgColor={this.props.bgColor} id={this.props.id}>
                    <ListTitle><span>{this.props.name}</span> <ListMenu onClick={this.props.openListDetails}><RiSettingsLine/></ListMenu></ListTitle>

                    <TodosContainer>
                        {todos}
                    </TodosContainer>

                    <form style={{width:'100%'}} onSubmit={(event)=>this.addTodo(event,this.props.listID)}>
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
    }
}

export default ListBoard
