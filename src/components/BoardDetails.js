import autosize from 'autosize'
import _ from 'lodash'
import React, { Component } from 'react'
import { BlockPicker } from 'react-color'
import { connect } from 'react-redux'
import { SuccessButton } from '../Designs/Buttons'
import { Colors } from '../Designs/DesignVariables'
import { Actions, DetailsContainer, DetailsInput, DetailsLabel, DetailsWrapper } from '../Designs/Details'
// import { Backdrop, ConfirmDelete, DeleteItemName } from '../Designs/misc'
import { EditBoard } from '../store/actions'

/**
* @author
* @function BoardDetails
**/

class BoardDetails extends Component {
    state = {
        newBoard: null,
        boardID: '',
        userID: '',
        DetailsLoaded: false,
        showDeleteConfirmation: false
    }
    componentDidMount() {
        this.setState({
            newBoard: {
                name: this.props.Details.name,
                bgColor: this.props.Details.bgColor,
                description: this.props.Details.description,
            },
            userID: this.props.Details.userID,
            boardID: this.props.Details.boardID,
            DetailsLoaded: true,
        })
    }

    completeEdit = () => {
        const oldBoard = {
            name: this.props.Details.name,
            bgColor: this.props.Details.bgColor,
            description: this.props.Details.description,
        }
        if (_.isEqual(oldBoard, this.state.newBoard)) {
            this.props.closeDetails()
        }
        else {
            const newBoard={    
                ...this.state.newBoard,
                boardID: this.state.boardID,
                userID: this.state.userID
            }
            this.props.onEditBoard(this.state.boardID, this.state.userID, newBoard)
            this.props.closeDetails()
        }
    }
    deleteList = () => {
        console.log(this.state.boardID, this.state.userID)
        console.log('Deleted Board ', this.state.boardID, this.state.userID)
        this.props.onDeleteBoard(this.state.boardID, this.state.listID)
        this.handleDeleteConfirmation()
        this.props.closeDetails()
    }

    handleDeleteConfirmation = () => {
        const show = this.state.showDeleteConfirmation
        this.setState({ showDeleteConfirmation: !show })
    }

    onChangeListData = () => {
        autosize(document.querySelectorAll('textarea'))
    }


    handleNewName = (event) => {
        const list = { ...this.state.newBoard }
        list.name = event.target.value
        this.setState({ newBoard: list })
    }
    handleNewDescription = (event) => {
        const list = { ...this.state.newBoard }
        list.description = event.target.value
        this.setState({ newBoard: list })
    }
    onChangeListStatus = (color, event) => {
        const list = { ...this.state.newBoard }
        list.bgColor = color.hex
        this.setState({ newBoard: list })
    }

    renderBoardDetails = () => {
        if (!this.state.DetailsLoaded) {
            return null
        } else {
            return (
                <DetailsContainer>

                    <DetailsLabel>Name</DetailsLabel>
                    <DetailsInput value={this.state.newBoard.name} onInput={(event) => {
                        this.onChangeListData()
                        this.handleNewName(event)

                    }}>{this.state.newBoard.name}</DetailsInput>

                    <DetailsLabel>Description</DetailsLabel>
                    <DetailsInput value={this.state.newBoard.description} onInput={(event) => {
                        this.onChangeListData()
                        this.handleNewDescription(event)

                    }}>{this.props.Details.description}</DetailsInput>

                    <DetailsLabel>Color</DetailsLabel>
                    <DetailsWrapper>
                        <BlockPicker width={`100%`}
                            triangle='hide'
                            color={this.state.newBoard.bgColor}
                            colors={Object.values(Colors.navBarColors)}
                            onChangeComplete={this.onChangeListStatus}
                        />
                    </DetailsWrapper>

                    <Actions>
                        <SuccessButton dark onClick={this.props.closeDetails}>Cancel</SuccessButton>
                        <SuccessButton border onClick={this.completeEdit}>Save</SuccessButton>
                        {/* <DangerButton onClick={this.handleDeleteConfirmation}>Delete</DangerButton> */}
                    </Actions>

                    {/* <Backdrop show={this.state.showDeleteConfirmation}>
                        <ConfirmDelete show={this.state.showDeleteConfirmation}>
                            <DetailsLabel>Are you sure you want to delete List "<DeleteItemName>{this.state.newBoard.name}</DeleteItemName>"? All the Tasks Within the List will be delete.</DetailsLabel>
                            <Actions>
                                <SuccessButton dark onClick={this.handleDeleteConfirmation}>Cancel</SuccessButton>
                                <DangerButton onClick={this.deleteList}>Delete</DangerButton>
                            </Actions>
                        </ConfirmDelete>
                    </Backdrop> */}
                </DetailsContainer>
            )
        }
    }

    render() {
        return (
            this.renderBoardDetails()
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        // onDeleteBoard: (boardID, listID) => dispatch(),
        onEditBoard:(boardID, listID, newBoard) => dispatch(EditBoard(boardID, listID, newBoard))
    }
}
export default connect(null, mapDispatchToProps)(BoardDetails)