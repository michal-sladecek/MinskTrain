import React from 'react'
import NotImplemented from './NotImplemented'
import {Button, Modal} from 'react-bootstrap'
const Carriage = React.createClass({
    getInitialState: function() {
        return { show: false };
    },
    render(){
        let indexChar = String.fromCharCode(this.props.id+65)
        const submit = (e) => {
            e.preventDefault()
            this.props.changeNumber(this.props.id, e.target.getElementsByTagName("input")[0].value)
            hideModal()
        }
        const showModal = (e) => {
            this.setState({ show: true })
        }
        const hideModal = (e) => {
            this.setState({ show: false })
        }
        return (
            <div onClick={showModal} className='Carriage'>
                <p>{indexChar}</p>
                <h3 >{this.props.num}</h3>
                <Modal show={this.state.show} onHide={hideModal}>
                    <form onSubmit={submit}>
                        <input type='text' placeholder='Enter new number' autoFocus/>
                    </form>
                </Modal>
            </div>
        )
    }
})
export default Carriage