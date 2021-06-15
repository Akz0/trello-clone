import React, { Component } from 'react'
import styled from 'styled-components';
import ListBoard from '../containers/List'
import { Colors, returnColor } from '../DesignVariables';
import { FcTimeline, FcWorkflow, FcSettings } from 'react-icons/fc'

const ListsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    height: 70vh;
    width: 100%;
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
    display: flex;
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
        lists: [
            {
                name: 'School Work',
                listID: 4455146,
                todoItems: [
                    {
                        id: 'l0sw0',
                        todo: 'Complete Maths Homework',
                        completed: false
                    },
                    {
                        id: 'l0sw1',
                        todo: 'English Essay',
                        completed: false
                    },
                    {
                        id: 'l0sw2',
                        todo: 'Community Project',
                        completed: false
                    },
                    {
                        id: 'l0sw3',
                        todo: 'Basketball Practice',
                        completed: false
                    }
                ]
            },
            {
                name: 'Home',
                listID: 4455456,
                todoItems: [
                    {
                        id: 'l0h0',
                        todo: 'Clean Room',
                        completed: false
                    },
                ]
            }
        ]
    }


    render() {
        const listsBoard = this.state.lists.map(item => {
            return <ListBoard backgroundColor={returnColor(Colors.nonGreyScale)} key={item.listID} name={item.name} todos={item.todoItems} />
        })
        return (
            <>
                <TopNavBar>
                    <BoardSettings>
                        <TopNavBarButtons> <FcWorkflow /> <ButtonTitle>Menu</ButtonTitle> </TopNavBarButtons>
                        <BoardTitle>My Board 1</BoardTitle>
                    </BoardSettings>
                    <SettingsContainer>
                        <TopNavBarButtons> <FcTimeline /> <ButtonTitle>Boards</ButtonTitle> </TopNavBarButtons>
                        <TopNavBarButtons> <FcSettings /> <ButtonTitle>Account Settings</ButtonTitle> </TopNavBarButtons>
                    </SettingsContainer>
                </TopNavBar>
                <ListsContainer>
                    {listsBoard}
                    <AddNewListContainer>
                        <AddNewListInput type="text" placeholder={`Add New List`} />
                        <SuccessButton>Add</SuccessButton>
                    </AddNewListContainer>
                </ListsContainer>


            </>
        )
    }
}

export default Board
