import React from 'react'
import NotImplemented from './NotImplemented'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {changeTool} from '../actions/toolActions'

const ToolBox = ({groups, current} ) => {
        let toolGroups = groups.map((toolGroup, i) => {
            return <ToolGroup key={i} groupId={i} toolGroup={toolGroup}/>
        })

        return (
            <div className='ToolBox'>
                <img className='currentTool' src={groups[current.group][current.index].img}/>
               {toolGroups}
            </div>
        )
}

const ToolGroup = React.createClass({
    render() {
        const title = (<img src={this.props.toolGroup[0].img}/>)

        return (
            <div className='ToolIcon'>
                <DropdownButton id='nestresuj' title={title}>
                    {
                        this.props.toolGroup.map((tool, i) => {
                            return (
                                <ToolIcon key={i} id={i} tool={tool}/>
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
        console.log("Handling event")
        e.preventDefault()
    },
    render() {
        return (
            <div className='ToolIcon'>
               <MenuItem onClick={this.handleClick}>
                    <img src={this.props.tool.img} title={this.props.tool.id}/>
                </MenuItem>
            </div>
        )
    }
})

export default ToolBox