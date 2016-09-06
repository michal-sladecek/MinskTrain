import React from 'react'
import NotImplemented from './NotImplemented'
import {DropdownButton, MenuItem} from 'react-bootstrap'

const ToolBox = ({groups, current, changeTool}) => {
        let toolGroups = groups.map((toolGroup, i) => {
            return <ToolGroup key={i} groupId={i} toolGroup={toolGroup} changeTool={changeTool}/>
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
        this.props.changeTool(this.props.groupId, this.props.id)
    },
    render() {
        return (
            <div className='ToolIcon'>
               <MenuItem {...this.props} onClick={this.handleClick}>
                    <img src={this.props.tool.img} title={this.props.tool.id}/>
                </MenuItem>
            </div>
        )
    }
})

export default ToolBox