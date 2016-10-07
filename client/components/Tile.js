import React from 'react'
import NotImplemented from './NotImplemented'
import items from './items/items'
import {Modal, OverlayTrigger, Tooltip} from 'react-bootstrap'
import tooltips from '../messages/tooltips'
import getBuildModal from './items/forms'


const Tile = React.createClass({
    getInitialState(){
        return { showModal: false }
    },
    render(){
        const submitNoModal = (e) => {
            if(e.target !== this.refs.div) return
            e.preventDefault()
            this.props.useTool(this.props.coord)
        }

        const submit = (e) => {
            e.preventDefault()
            const array = Array.prototype.slice.call(e.target.getElementsByTagName("input")).map((val) => {return val.value})
            this.props.useTool(this.props.coord, array)
            hideModal()
        }
        const doNothing = (e) => {e.preventDefault()}
        const showModal = (e) => {
            if(e.target !== this.refs.div) return
            this.setState({ showModal: true })
        }

        const hideModal = (e) => {
            this.setState({ showModal: false })
        }


        const getEvents = (onTile, currentTool) => {
            if(currentTool === 'ERASER') {
                return {
                    onClick: submitNoModal,
                    onDragEnter: submitNoModal
                }
            }
            let onDragStart = ()=>{}
            if(onTile != null) {
                onDragStart = this.props.changeTool.bind(this,onTile)
            }
            if(currentTool === 'LR' || currentTool === 'UD') {
                return {
                    onClick: submitNoModal,
                    onDragEnter: submitNoModal,
                    onDragStart
                }
            }
            else if(currentTool === 'UL' || currentTool === 'LD' || currentTool === 'DR' || currentTool === 'RU') {
                return {
                    onDragOver: doNothing,
                    onClick: submitNoModal,
                    onDrop: submitNoModal,
                    onDragStart
                }
            }
            else {
                return {
                    onDragOver: doNothing,
                    onClick: showModal,
                    onDrop: showModal,
                    onDragStart
                }
            }

            
        }

        
        let tileImg = []
        if(this.props.show){
            tileImg=items[this.props.show.type]           
        }
        
        let form = getBuildModal(submit, this.props.currentTool)

        let modal = null

        
        if (form) {
            modal = (
                <Modal show={this.state.showModal} onHide={hideModal}>
                    {form}
                </Modal>
            )
        }
        const body = (
            <div ref='div' className='Tile' {...getEvents((this.props.show ? this.props.show.type : null), this.props.currentTool)} draggable>
                { tileImg }
                {modal}
            </div>
        )
        let tooltip = null
        if (this.props.tooltip) {
            const tooltip = (
                <Tooltip id="tooltip" >{tooltips[this.props.show.type](this.props.show.id) }</Tooltip>
            )
            return (
                <OverlayTrigger placement="left" overlay={tooltip}  >
                    {body}
                </OverlayTrigger>
            )
        }
        else {
            return body
        }
    }
})
export default Tile