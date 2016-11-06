import React from 'react'
import NotImplemented from './NotImplemented'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import messages from '../messages/messages'
const Carriage = React.createClass({

    getInitialState() {
        return { show: false, value: null }
    },

    render(){
        let indexChar = String.fromCharCode(this.props.id+65)
        const showModal = (e) => {
            this.setState({ ...this.state, show: true })
        }
        const hideModal = (e) => {
            this.setState({ ...this.state, show: false, value: null })
        }
        const setValue = (value) => {
            this.setState({ ...this.state, value })
        }
        const submit = (e) => {
            e.preventDefault()
            const value = this.state.value
            this.props.changeNumber(this.props.id, value)
            hideModal()
        }
        console.log('kreslim', this.state)
        return (
            <div onClick={showModal} className='Carriage'>
                <p>{indexChar}</p>
                <h3 >{this.props.num}</h3>
                <Modal show={this.state.show} onHide={hideModal}>
                    <form onSubmit={submit}>
                        <Modal.Body>
                            <FormGroup>
                                <ControlLabel>{messages.enterNumber}</ControlLabel>
                                <FormControl
                                    type="number"
                                    min="0"
                                    max="99"
                                    autoFocus
                                    value={this.state.value === null ? this.props.num : this.state.value }
                                    onChange={(e) => setValue(e.target.value)}
                                />
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit">
                                Nastav
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
})
export default Carriage