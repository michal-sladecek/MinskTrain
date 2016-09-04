import React from 'react'
import NotImplemented from './NotImplemented'
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
        return (
            <div className='ToolIcon'>

                <img src={this.props.toolGroup[0].img}/>
            </div>
        )
    }
})

const ToolIcon = React.createClass({
    render() {
        return (
            <div className='ToolIcon'>
                <NotImplemented name='ToolIcon'/>
            </div>
        )
    }
})
export default ToolBox