import React, { Component } from 'react'
import styled from 'styled-components'
import TodoItem from '../components/TodoItem';
import { Colors } from '../DesignVariables';

const ListContainer = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1rem 0 1rem;
    padding: 1rem 1rem;
    height: fit-content;
    max-height: 85vh;
    background: ${props => props.bgColor};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    //box-shadow: 0 -20px 15px -10px rgba(0,0, 0, 0.3) inset,0 20px 15px -10px rgba(0, 0, 0, 0.3) inset,0 0 10px rgba(0, 0, 0, 0.1);
    
`;

const ListTitle = styled.div`
    font-size: 18px;
    width: 100%;
    margin: 0 0 1rem 0;
    font-weight: bold;
    color:${Colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ListMenu = styled.span`
    padding:0 1rem 0.5rem 1rem;
    font-size: 18px;
    border: none;
    color: white;
    background: none;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
    :hover{
        background-color:${Colors.grey};
        color:${Colors.darkGrey}
    }
`

const AddNewListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin:  0.5em 0 0.5em 0;
`
const AddNewListInput = styled.input`
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    padding: 1em;
    margin:  0.5em 0 0.5em 0;
    background: ${Colors.grey};
    border: none;
    outline: none;
    :focus{
        border: none;
        outline: none;
    }
`;

const SuccessButton = styled.button`
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    font-size: 14px;
    border: none;
    color: ${Colors.black};
    background: ${Colors.white};
    border-radius: 3px;

    :hover{
        cursor:pointer;
    }
`
const TodosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: fit-content;
    max-height: 60vh;
    overflow-y: scroll;
`

class ListBoard extends Component {
    state={
        newTodoName:''
    }
    handleNewTodoName=(e)=>{
        const newName=e.target.value
        this.setState({newTodoName:newName})
    }
    showAddTodoButtonOnClick = (event) => {
        const button = document.querySelector(`#add-new-todo-button${this.props.id}`)
        if (event.target.id ===`add-new-todo-input${this.props.id}`) {
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
            return <TodoItem key={item.id} id={item.id} todo={item.todo} />
        });
        return (
            <div>
                <ListContainer bgColor={this.props.backgroundColor} id={this.props.id}>
                    <ListTitle><span>{this.props.name}</span> <ListMenu>...</ListMenu></ListTitle>

                    <TodosContainer>
                        {todos}
                    </TodosContainer>

                    <form style={{width:'100%'}} onSubmit={(event)=>this.addTodo(event,this.props.id)}>
                        <AddNewListContainer>
                            <AddNewListInput
                                type="text"
                                id={`add-new-todo-input${this.props.id}`}
                                onClick={(event) => this.showAddTodoButtonOnClick(event)}
                                onInput={(event) => this.handleNewTodoName(event)}
                                placeholder={`Add Another Card`}
                                autoComplete="off"
                                value={this.state.newTodoName}
                            />
                            <SuccessButton id={`add-new-todo-button${this.props.id}`} type="submit">Add</SuccessButton>
                        </AddNewListContainer>
                    </form>


                </ListContainer>
            </div>
        )
    }
}

export default ListBoard
