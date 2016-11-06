import React from 'react'
import NotImplemented from './NotImplemented'
import items from './items/items'
import {Modal, OverlayTrigger, Tooltip} from 'react-bootstrap'
import tooltips from '../messages/tooltips'
import getModalBody from './items/forms'
const Tile = React.createClass({
    getInitialState(){
        return { showModal: false }
    },
    render(){
        let tileImg = []
        if(this.props.show){
            tileImg=items[this.props.show.type]           
        }
        const submit = (e) => {
            e.preventDefault()

            const values = Array.prototype.slice.call(
                e.target.getElementsByTagName('select')
            ).map((elem) => {return elem.options[elem.selectedIndex].value})

            this.props.useTool(this.props.coord, values)
            hideModal()
        }
        const submitNoModal = (e) => {
            if(e.target !== this.refs.div) return
            e.preventDefault()
            this.props.useTool(this.props.coord)
        }
        const showModal = (e) => {
            if(e.target !== this.refs.div) return
            this.setState({ showModal: true })
        }
        const hideModal = (e) => {
            this.setState({ showModal: false })
        }
        let form = getModalBody(submit, this.props.currentTool)
        let modal = []
        let whatToDo = submitNoModal
        if(form){
            modal = (
                <Modal show={this.state.showModal} onHide={hideModal} autoFocus>
                    {form}
                </Modal>
            )
            whatToDo = showModal
        }
        if(this.props.show && this.props.tooltip){
            const tooltip = (
             <Tooltip id="tooltip" >{tooltips[this.props.show.type](this.props.show.id)}</Tooltip>
            )
            return (
            <OverlayTrigger placement="left" overlay={tooltip} draggable>
                <div ref='div' className='Tile' onClick={whatToDo} onDragEnter={whatToDo}>
                    { tileImg }
                    {modal}        
                </div>
             </OverlayTrigger>         
        ) 
        }
        else {
           return (
                <div ref='div' className='Tile' onClick={whatToDo} onDragEnter={whatToDo} draggable>
                    { tileImg }
                    {modal}
                </div>  
        )  
        }
        
    }
})
export default Tile