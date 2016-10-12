import React from 'react'
import NotImplemented from './NotImplemented'
import {DropdownButton, MenuItem, ButtonToolbar} from 'react-bootstrap'
import items from './items/items'
import {UDrails} from './items/rails'
const ToolBox = ({groups, current, changeTool, level}) => {
        let toolGroups = Object.keys(groups).map((toolGroup, i) => {
            if(level.allowed.indexOf(toolGroup) != -1)
                return <ToolGroup key={i} groupId={toolGroup} changeTool={changeTool} toolGroup={groups[toolGroup]}/>
            return null
        })
        return (
            <div className='ToolBox'>
                <p>Momentálne vybraný nástroj:<br/> {items[current]}</p>
                    {toolGroups}
             </div>
        )
}

const ToolGroup = React.createClass({
    render() {
        const title = items[this.props.groupId]
        return (
            <div className='ToolGroup'>
                {
                        this.props.toolGroup.map((tool, i) => {
                            return (
                                <ToolIcon key={i} id={i} groupId={this.props.groupId} tool={tool} changeTool={this.props.changeTool}/>
                            )
                        })
                    }
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
            <div className='ToolIcon' onClick={this.handleClick}>
                    {items[this.props.tool]}
            </div>
        )
    }
})

export default ToolBox