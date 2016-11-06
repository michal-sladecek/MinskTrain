import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as trainActions from '../actions/trainActions'
import * as serverActions from '../actions/serverActions'
import {push as changeRoute} from 'react-router-redux'
import {Modal, Button} from 'react-bootstrap'
import getNotify from '../messages/errors'


const Notification = React.createClass({
    render(){
        const hideModal = (e) => {
            this.props.clearNotify()
        }
        const test = (newVagons) => {
            this.props.clearNotify()
            this.props.setTrain(newVagons)
            this.props.play()
        }
        const {title, body, buttons} = getNotify(
            this.props.notify,
            {test, hideModal, ...this.props},
        ) || {}
        return (
            <Modal bsSize="large" show = {this.props.notify.id !== ''} onHide={hideModal}>
                {title && (<Modal.Header><Modal.Title>{title}</Modal.Title></Modal.Header>)}
                {body && (<Modal.Body>{body}</Modal.Body>)}
                <Modal.Footer>
                    {buttons}
                    <Button onClick={hideModal}>Zatvor</Button>
                </Modal.Footer>
            </Modal>
        )
    }
})

const mapStateToProps = (state, ownProps) => {
    return {
        notify: state.game.train.notify,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...trainActions,
        ...serverActions,
        changeRoute,
    }, dispatch)
}

const NotificationContainer = connect(
  mapStateToProps,mapDispatchToProps)(Notification)
export default NotificationContainer