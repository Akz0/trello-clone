import React, { Component} from 'react'
import styled from 'styled-components';
import ListBoard from './List'
import { Colors, returnColor } from '../DesignVariables';
import { FcTimeline, FcWorkflow, FcSettings } from 'react-icons/fc'
import { connect } from 'react-redux';
import { CreateNewList,CreateNewTodo } from '../store/actions/lists.actions';

const ListsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    height: 90vh;
    width: 100%;
    overflow-x: scroll;
`
const TopNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    background-color: ${returnColor(Colors.navBarColors)};
`
const TopNavBarButtons = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 1rem;
    padding: 1rem 1rem;
    font-size: 14px;
    border: none;
    color: ${Colors.darkGrey};
    background: ${Colors.white};
    border-radius: 3px;

    :hover{
        color:${Colors.black};
        cursor:pointer;
    }
`
const ButtonTitle = styled.span`
    margin: 0 0.4rem;
`
const BoardTitle = styled.span`
    color:${Colors.white};
    font-weight: bold;
    font-size: 24px;
`
const BoardSettings = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SettingsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const AddNewListContainer = styled.div`
    width: 350px;
    display: flex;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: fit-content;
    background: ${props => props.bgColor};
`
const AddNewListInput = styled.input`
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
    color: ${Colors.white};
    background: ${Colors.black};
    border-radius: 3px;

    :hover{
        cursor:pointer;
    }
`
class Board extends Component {

    state = {
        newListName: '',
        newTodoName: '',
    }
    addNewList=(e)=>{
        e.preventDefault();
        const bgColor=returnColor(Colors.nonGreyScale)
        if (this.state.newListName && this.state.newListName.trim()) {
            this.props.onAddNewList(this.state.newListName,this.props.boardID,bgColor)

            this.setState({newListName:''})
        }
    }
    addNewTodo=(name,id)=>{
        this.props.onAddNewTodo(name,id)  
    }

    showAddListButtonOnClick = (event) => {
        const button=document.querySelector('#add-new-list-button')
        if(event.target.id==="add-new-list-input"){
            button.style.display="flex"
        }else
        {
            button.style.display="none"
        } 
    }
    

    handleNewListName=(e)=>{
        const newName=e.target.value
        this.setState({newListName:newName})
    }
    
    

    render() {
        const listsBoard = this.props.lists.map(item => {
            return <ListBoard 
            backgroundColor={item.bgColor} 
            key={item.listID} 
            id={item.listID} 
            name={item.name} 
            todos={item.todoItems} 
            handleNewTodoName={this.handleNewTodoName}
            newTodoInputValue={this.state.newTodoName}
            addNewTodo={this.addNewTodo}
            />
        })
        return (
            <div onClick={(event)=>this.showAddListButtonOnClick(event)}>
                <TopNavBar>
                    <BoardSettings>
                        <TopNavBarButtons> <FcWorkflow /> <ButtonTitle>Menu</ButtonTitle> </TopNavBarButtons>
                        <BoardTitle>{this.props.boardName}</BoardTitle>
                    </BoardSettings>
                    <SettingsContainer>
                        <TopNavBarButtons> <FcTimeline /> <ButtonTitle>Boards</ButtonTitle> </TopNavBarButtons>
                        <TopNavBarButtons> <FcSettings /> <ButtonTitle>Account Settings</ButtonTitle> </TopNavBarButtons>
                    </SettingsContainer>
                </TopNavBar>


                <ListsContainer>
                    {listsBoard}
                    <form onSubmit={(event)=>this.addNewList(event)}>
                        <AddNewListContainer>
                            <AddNewListInput 
                            id="add-new-list-input" 
                            onClick={(event)=>this.showAddListButtonOnClick(event)} 
                            onInput={(event)=>this.handleNewListName(event)}  
                            type="text" 
                            placeholder={`Add New List`} 
                            value={this.state.newListName}
                            autoComplete="off"
                            />
                            <SuccessButton id="add-new-list-button" type="submit">Add</SuccessButton>
                        </AddNewListContainer>
                    </form>

                </ListsContainer>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boardName: state.boards.boardName,
        boardID: state.boards.boardID,
        lists: state.lists.lists,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onAddNewList:(name,boardID,bgColor)=>dispatch(CreateNewList(name,boardID,bgColor)),
        onAddNewTodo:(name,listID)=>dispatch(CreateNewTodo(name,listID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
