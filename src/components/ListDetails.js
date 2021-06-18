import autosize from 'autosize'
import _ from 'lodash'
import React, { Component } from 'react'
import { BlockPicker } from 'react-color'
import { connect } from 'react-redux'
import { DangerButton, SuccessButton } from '../Designs/Buttons'
import { Colors } from '../Designs/DesignVariables'
import { Actions, DetailsContainer, DetailsInput, DetailsLabel, DetailsWrapper } from '../Designs/Details'
import { Backdrop, ConfirmDelete, DeleteItemName } from '../Designs/misc'
import { DeleteList, EditList } from '../store/actions'

/**
* @author
* @function ListDetails
**/

class ListDetails extends Component {
    state = {
        newList: null,
        listID: '',
        boardID: '',
        DetailsLoaded: false,
        showDeleteConfirmation: false
    }
    componentDidMount() {
        this.setState({
            newList: {
                name: this.props.Details.name,
                bgColor: this.props.Details.bgColor,
                description: this.props.Details.description,
            },
            listID: this.props.Details.listID,
            boardID: this.props.Details.boardID,
            DetailsLoaded: true,
        })
    }

    completeEdit = () => {
        const oldList = {
            name: this.props.Details.name,
            bgColor: this.props.Details.bgColor,
            description: this.props.Details.description,
        }
        if (_.isEqual(oldList, this.state.newList)) {
            this.props.closeDetails()
        }
        else {
            this.props.onEditList(this.state.boardID, this.state.listID, {
                ...this.state.newList,
                id: this.state.todoID
            })
            this.props.closeDetails()
        }
    }
    deleteList = () => {

        this.props.onDeleteList(this.state.boardID,this.state.listID)
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
        const list = { ...this.state.newList }
        list.name = event.target.value
        this.setState({ newList: list })
    }
    handleNewDescription = (event) => {
        const list = { ...this.state.newList }
        list.description = event.target.value
        this.setState({ newList: list })
    }
    onChangeListStatus = (color,event) => {
        const list = { ...this.state.newList }
        list.bgColor = color.hex
        this.setState({ newList: list })
    }

    renderTodoDetails = () => {
        if (!this.state.DetailsLoaded) {
            return null
        } else {
            return (
                <DetailsContainer>

                    <DetailsLabel>Name</DetailsLabel>
                    <DetailsInput value={this.state.newList.name} onInput={(event) => {
                        this.onChangeListData()
                        this.handleNewName(event)

                    }}>{this.props.todoName}</DetailsInput>

                    <DetailsLabel>Description</DetailsLabel>
                    <DetailsInput value={this.state.newList.description} onInput={(event) => {
                        this.onChangeListData()
                        this.handleNewDescription(event)

                    }}>{this.props.description}</DetailsInput>

                    <DetailsLabel>Color</DetailsLabel>
                    <DetailsWrapper>
                        <BlockPicker width={`100%`} 
                        triangle='hide'
                        color={this.state.newList.bgColor} 
                        colors={Object.values(Colors.nonGreyScale)} 
                        onChangeComplete={this.onChangeListStatus}
                        />
                    </DetailsWrapper>

                    <Actions>
                        <SuccessButton dark onClick={this.props.closeDetails}>Cancel</SuccessButton>
                        <SuccessButton border onClick={this.completeEdit}>Save</SuccessButton>
                        <DangerButton onClick={this.handleDeleteConfirmation}>Delete</DangerButton>
                    </Actions>

                    <Backdrop show={this.state.showDeleteConfirmation}>
                        <ConfirmDelete show={this.state.showDeleteConfirmation}>
                            <DetailsLabel>Are you sure you want to delete List "<DeleteItemName>{this.state.newList.name}</DeleteItemName>"? All the Tasks Within the List will be delete.</DetailsLabel>
                            <Actions>
                                <SuccessButton dark onClick={this.handleDeleteConfirmation}>Cancel</SuccessButton>
                                <DangerButton onClick={this.deleteList}>Delete</DangerButton>
                            </Actions>
                        </ConfirmDelete>
                    </Backdrop>

                </DetailsContainer>
            )
        }
    }

    render() {
        return (
            this.renderTodoDetails()
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        onDeleteList: (boardID, listID) => dispatch(DeleteList(boardID, listID,)),
        onEditList: (boardID, listID, newList) => dispatch(EditList(boardID, listID, newList))
    }
}
export default connect(null, mapDispatchToProps)(ListDetails)