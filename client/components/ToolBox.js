import React from 'react'
import NotImplemented from './NotImplemented'
import {DropdownButton, MenuItem} from 'react-bootstrap'
const ToolBox = React.createClass({
    render() {
        let groups = this.props.tools.tools
        let toolGroups = groups.map((toolGroup, id) => {
            return <ToolGroup key={id} id={id} toolGroup={toolGroup}/>
        })
        let ct=this.props.tools.currentTool

        return (
            <div className='ToolBox'>
                <img className='currentTool' src={groups[ct.group][ct.index].img}/>
               {toolGroups}
            </div>
        )
    }
})

const ToolGroup = React.createClass({
    render() {
        const title = (<img src={this.props.toolGroup[0].img}/>)
        return (
            <div className='ToolIcon'>
                <DropdownButton title={title}>
                    {
                        this.props.toolGroup.map((tool, i) => {
                            return (<MenuItem key={i}>
                                        <ToolIcon key={i} id={i} tool={tool}/>
                                    </MenuItem>
                            )
                        })
                    }
                </DropdownButton>
            </div>
        )
    }
})
const ToolIcon = React.createClass({
    render() {
        return (
            <div className='ToolIcon'>
                <img src={this.props.tool.img} title={this.props.tool.id}/>
            </div>
        )
    }
})
export default ToolBox