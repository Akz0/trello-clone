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
    max-height: 70vh;
    background: ${props => props.bgColor};
    box-shadow: 0 5px 10px 1px rgba(0,0,0,0.3);
    box-shadow: 0 -5px 20px 1px rgba(0,0,0,0.3);
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
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
    display: flex;
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




class ListBoard extends Component {

    render() {
        const todos = this.props.todos.map(item => {
            return <TodoItem key={item.id} id={item.id} todo={item.todo} />
        });
        return (
            <ListContainer bgColor={this.props.backgroundColor}>
                <ListTitle><span>{this.props.name}</span> <ListMenu>...</ListMenu></ListTitle>
                {todos}

                <AddNewListContainer>
                    <AddNewListInput type="text" placeholder={`Add Another Card`} />
                    <SuccessButton>Add</SuccessButton>
                </AddNewListContainer>


            </ListContainer>
        )
    }
}

export default ListBoard
