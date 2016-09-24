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
                    {getNotify(this.props.notify, { otestuj })}
            </Modal>
        )
    }
})

const mapStateToProps = (state, ownProps) => {
  return {
      notify: state.game.train.notify
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const NotificationContainer = connect(
  mapStateToProps,mapDispatchToProps)(Notification)
export default NotificationContainer