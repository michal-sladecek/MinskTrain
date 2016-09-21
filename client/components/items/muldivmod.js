import React from 'react'
export const UDMul = React.createClass({
    render() {
        let transform=''
        if(this.props.transform){
            transform=this.props.transform
        }
        let tracks = []
        const style = {'stroke': 'rgb(0,0,0)','strokeWidth': '2' }
        for(var i=5;i<40;i+=5){
            tracks.push(<line key={i/5} x1="15" y1={i} x2="25" y2={i} style={style}/> )
        }
        return (
            <svg width='40' height='40'>
            <g transform = {this.props.transform}>
                <line x1="15" y1="0" x2="15" y2="40" style={style} />
                <line x1="25" y1="0" x2="25" y2="40" style={style} />
                {tracks}
                <path d="M7 15 h3 v3 h3 v3 h-3 v3 h-3 v-3 h-3 v-3 h3 z" transform='rotate(45 20 20)'/>
                <circle cx={9} cy={20} r={5} style={{'fill':'none','stroke': 'rgb(0,0,0)', 'strokeWidth': '2'}}/>
            </g>
            </svg>
        )
    }
})

export const LRMul = React.createClass({
    render() {
        return (
             <UDMul transform='rotate(90 20 20)'/>
        )
    }
})