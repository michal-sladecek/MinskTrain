import React from 'react'
import NotImplemented from './NotImplemented'
import {DropdownButton, MenuItem, ButtonToolbar} from 'react-bootstrap'
import items from './items/items'
import {UDrails} from './items/rails'
const ToolBox = ({groups, current, changeTool}) => {
        let toolGroups = Object.keys(groups).map((toolGroup, i) => {
            return <ToolGroup key={i} groupId={toolGroup} changeTool={changeTool} toolGroup={groups[toolGroup]}/>
        })
        return (
            <div className='ToolBox'>
                    {items[current]}
                    {toolGroups}
             </div>
        )
}

const ToolGroup = React.createClass({
    render() {
        const title = items[this.props.groupId]
        return (
            <div className='ToolGroup'>
                <DropdownButton id='nestresuj' title={title} noCaret>
                    {
                        this.props.toolGroup.map((tool, i) => {
                            return (
                                <ToolIcon key={i} id={i} groupId={this.props.groupId} tool={tool} changeTool={this.props.changeTool}/>
                            )
                        })
                    }
                </DropdownButton>
            </div>
        )
    }
})
const ToolIcon = React.createClass({
    handleClick(e){
        this.props.changeTool(this.props.tool)
    },
    
    render() {
        return (
            <div className='ToolIcon'>
               <MenuItem onClick={this.handleClick}>
                    {items[this.props.tool]}
                </MenuItem>
            </div>
        )
    }
})

export default ToolBox