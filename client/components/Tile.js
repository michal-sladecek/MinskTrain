import React from 'react'
import NotImplemented from './NotImplemented'
import items from './items/items'
import {Modal, OverlayTrigger, Tooltip} from 'react-bootstrap'
import tooltips from '../messages/tooltips'
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
            this.props.useTool(this.props.coord, e.target.getElementsByTagName("input")[0].value)
            hideModal()
        }
        const submitNoModal = (e) => {
            if(e.target !== this.refs.div) return
            e.preventDefault()
            this.props.useTool(this.props.coord)
        }
        const showModal = (e) => {
            if(e.target !== this.refs.div) return
            if(!this.props.modal){
                this.props.useTool(this.props.coord)
            } else{
                this.setState({ showModal: true })
            }
        }
        const hideModal = (e) => {
            this.setState({ showModal: false })
        }
        const whatToDo = (this.props.modal)?showModal:submitNoModal
        if(this.props.show && this.props.tooltip){
            const tooltip = (
             <Tooltip id="tooltip" >{tooltips[this.props.show.type](this.props.show.id)}</Tooltip>
            )
            return (
            <OverlayTrigger placement="left" overlay={tooltip}>
                <div ref='div' className='Tile' onClick={whatToDo} onDragEnter={whatToDo}>
                    { tileImg }
                
                    <Modal show={this.state.showModal} onHide={hideModal}>
                        <form onSubmit={submit}>
                            <input type='text' placeholder='Enter character of carriage' autoFocus/>
                        </form>
                    </Modal>
                    
                </div>
             </OverlayTrigger>         
        ) 
        }
        else {
           return (
                <div ref='div' className='Tile' onClick={whatToDo} onDragEnter={whatToDo}>
                    { tileImg }
                
                    <Modal show={this.state.showModal} onHide={hideModal}>
                        <form onSubmit={submit}>
                            <input type='text' placeholder='Enter character of carriage' autoFocus/>
                        </form>
                    </Modal>
                    
                </div>  
        )  
        }
        
    }
})
export default Tile