import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/trainActions'
import {Modal} from 'react-bootstrap'
import getNotify from '../messages/errors'


const Notification = React.createClass({
    render(){
        const hideModal = (e) => {
            this.props.clearNotify()
        }
        const otestuj = (newVagons) => {
            this.props.clearNotify()
            this.props.setTrain(newVagons)
            this.props.play()
        }
        return (
            <Modal bsSize="large" show = {this.props.notify.id !== ''} onHide={hideModal}>  
                    {getNotify(this.props.notify, { otestuj, hideModal , setLevel: this.props.setLevel}, this.props.nextLevel)}
            </Modal>
        )
    }
})

const mapStateToProps = (state, ownProps) => {
    let nextLevel = 'menu'
    if (state.game.levels.length > state.game.curLevel) {
        nextLevel = '' + (parseInt(state.game.curLevel) + 1)
    }
    return {
        notify: state.game.train.notify,
        nextLevel: nextLevel
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const NotificationContainer = connect(
  mapStateToProps,mapDispatchToProps)(Notification)
export default NotificationContainer