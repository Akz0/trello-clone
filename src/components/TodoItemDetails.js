import autosize from 'autosize'
import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DangerButton, SuccessButton } from '../Designs/Buttons'
import { Backdrop, ConfirmDelete, DeleteItemName } from '../Designs/misc'
import { Actions, DetailsContainer, DetailsInput, DetailsLabel, DetailsWrapper ,DetailsStatus} from '../Designs/Details'
import { DeleteTodo, EditTodo } from '../store/actions'

/**
* @author
* @function TodoItemDetails
**/

class TodoItemDetails extends Component {
    state = {
        newList: null,
        listID: '',
        todoID: '',
        todoDetailsLoaded: false,
        showDeleteConfirmation:false
    }
    componentDidMount() {
        this.setState({
            newList: {
                todo: this.props.todoDetail.todo,
                status: this.props.todoDetail.status,
                description: this.props.todoDetail.description,
            },
            listID: this.props.todoDetail.listID,
            todoID: this.props.todoDetail.id,
            todoDetailsLoaded: true,
        })
    }

    completeEdit = () => {
        const oldList = {
            todo: this.props.todoDetail.todo,
            status: this.props.todoDetail.status,
            description: this.props.todoDetail.description,
        }
        if(_.isEqual(oldList, this.state.newList)){
            this.props.closeDetails()
        }
        else{
            this.props.onEditTodo(this.state.listID,this.state.todoID,{
                ...this.state.newList,
                id:this.state.todoID
            })
            this.props.closeDetails()
        }
    }
    deleteTodo=()=>{
        this.props.onDeleteTodo(this.state.listID,this.state.todoID)
        this.handleDeleteConfirmation()
        this.props.closeDetails()
    }

    handleDeleteConfirmation=()=>{
        const show=this.state.showDeleteConfirmation
        this.setState({showDeleteConfirmation:!show})
    }
    onChangeListData = () => {
        autosize(document.querySelectorAll('textarea'))
    }
    handleNewName = (event) => {
        const list = { ...this.state.newList }
        list.todo = event.target.value
        this.setState({ newList: list })
    }
    handleNewDescription = (event) => {
        const list = { ...this.state.newList }
        list.description = event.target.value
        this.setState({ newList: list })
    }
    onChangeListStatus = (event) => {
        const list = { ...this.state.newList }
        list.status = event.target.value
        this.setState({ newList: list })
    }

    renderTodoDetails = () => {
        if (!this.state.todoDetailsLoaded) {
            return null
        } else {
            return (
                <DetailsContainer>

                    <DetailsLabel>Name</DetailsLabel>
                    <DetailsInput value={this.state.newList.todo} onInput={(event) => {
                        this.onChangeListData()
                        this.handleNewName(event)

                    }}>{this.props.todoName}</DetailsInput>

                    <DetailsLabel>Description</DetailsLabel>
                    <DetailsInput value={this.state.newList.description} onInput={(event) => {
                        this.onChangeListData()
                        this.handleNewDescription(event)

                    }}>{this.props.description}</DetailsInput>


                    <DetailsWrapper>
                        <DetailsLabel>Status</DetailsLabel>
                        <DetailsStatus onChange={(event) => this.onChangeListStatus(event)} value={this.state.newList.status}>
                            <option value='-'>Not Set</option>
                            <option value='complete'>Complete</option>
                            <option value='working'>Currently Working</option>
                        </DetailsStatus>
                    </DetailsWrapper>

                    <Actions>
                        <SuccessButton dark onClick={this.props.closeDetails}>Cancel</SuccessButton>
                        <SuccessButton border onClick={this.completeEdit}>Save</SuccessButton>
                        <DangerButton onClick={this.handleDeleteConfirmation}>Delete</DangerButton>
                    </Actions>
                    
                    <Backdrop show={this.state.showDeleteConfirmation}>
                    <ConfirmDelete show={this.state.showDeleteConfirmation}>
                        <DetailsLabel>Are You Sure You want to delete task "<DeleteItemName>{this.state.newList.todo}</DeleteItemName>"?</DetailsLabel>
                        <Actions>
                            <SuccessButton dark onClick={this.handleDeleteConfirmation}>Cancel</SuccessButton>
                            <DangerButton onClick={this.deleteTodo}>Delete</DangerButton>
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


const mapDispatchToProps=dispatch=>{
    return{
        onDeleteTodo:(listID,todoID)=>dispatch(DeleteTodo(listID,todoID)),
        onEditTodo:(listID,todoID,newTodo)=>dispatch(EditTodo(listID,todoID,newTodo))
    }
}
export default connect(null,mapDispatchToProps)(TodoItemDetails)