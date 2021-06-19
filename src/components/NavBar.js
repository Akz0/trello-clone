import React from 'react'
import { FcWorkflow } from 'react-icons/fc'
import { TopNavBarButtons } from '../Designs/Buttons'
import { BoardSettings, BoardTitle, ButtonTitle, TopNavBar } from '../Designs/TopNavBar'

/**
* @author
* @function TopNavBar
**/

const NavBar = (props) => {
    return (
        <TopNavBar color={props.color}>
            <BoardSettings>
                <TopNavBarButtons  onClick={props.boardMenuClick}> <FcWorkflow /> <ButtonTitle>Menu</ButtonTitle> </TopNavBarButtons>
                <BoardTitle>{props.boardName}</BoardTitle>
            </BoardSettings>
            {/* <SettingsContainer>
                <TopNavBarButtons onClick={props.browseBoards} > <FcTimeline /> <ButtonTitle>Boards</ButtonTitle> </TopNavBarButtons>
                <TopNavBarButtons onClick={props.AccountSettings} > <FcSettings /> <ButtonTitle>Account Settings</ButtonTitle> </TopNavBarButtons>
            </SettingsContainer> */}
        </TopNavBar>
    )

}

export default NavBar