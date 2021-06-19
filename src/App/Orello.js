import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import Board from '../containers/Board'
import BoardDetails from '../components/BoardDetails'
import { Backdrop } from '../Designs/misc'
import { GetInitialData } from '../store/actions/initialdata.action'

/**
* @author
* @class Orello
**/

class Orello extends Component {
    constructor(){
        super()
    }
    state = {
        showBoardDetails:false,
        showBaordsBrowser:false,
        showAccountSettings:false,
        currentBoardDetail:null,
        detailsLoaded:false,
    }
    boardMenuHandler = () => {
        this.setState({ showBoardDetails: false, currentBoardDetail: null })
    }
    componentDidMount(){
        this.props.onLoad()
        this.setState({detailsLoaded:true})
    }
    browseBoardsHandler = () => {
        console.log('Boards Browse CLicked')
    }
    AccountSettingsHandler = () => {
        console.log('Account Settings CLicked')
    }


    openBoardDetails = () => {
        this.setState({ currentBoardDetail: {
            name: this.props.name,
            bgColor: this.props.bgColor,
            description: this.props.description,
            boardID: this.props.boardID,
        }, showBoardDetails: true })
    }
    renderBoardDetails = () => {    
        if (!this.state.currentBoardDetail) {
            return null
        } else {
            return (
                <Backdrop show={this.state.showBoardDetails}>
                    <BoardDetails
                        closeDetails={this.boardMenuHandler}
                        Details={this.state.currentBoardDetail}
                    />
                </Backdrop>
            )
        }
    }




    render() {
        return (this.state.detailsLoaded?
            <div>

                <NavBar boardMenuClick={this.openBoardDetails}
                    browseBoards={this.browseBoardsHandler}
                    AccountSettings={this.AccountSettingsHandler}
                    boardName={this.props.name}
                    color={this.props.bgColor}
                />
                {/* <BaordsBrowser show={this.state.showBaordsBrowser}/> */}
                
                <Board showBoardMenu={this.state.showBoardMenu} lists={this.props.lists}  boardID={this.props.boardID}/>

                {this.renderBoardDetails()}

            </div>:null


        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.boards.currentBoard.name,
        boardID: state.boards.currentBoard.boardID,
        bgColor:state.boards.currentBoard.bgColor,
        description:state.boards.currentBoard.description,
        lists: state.lists.lists,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onLoad:()=>dispatch(GetInitialData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orello)