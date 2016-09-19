import React from 'react'
export const UDSetX = React.createClass({
    render() {
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
                <text x={5} y={20} style={{fontSize:'10'}}>N</text>
            </g>
            </svg>
        )
    }
})

export const LRSetX = React.createClass({
    render() {
        let tracks = []
        const style = { 'stroke': 'rgb(0,0,0)', 'strokeWidth': '2' }
        for (var i = 5; i < 40; i += 5) {
            tracks.push(<line key={i / 5} x1={i} y1='15' x2={i} y2='25' style={style}/>)
        }
        return (
            <svg width='40' height='40'>
                <g transform = {this.props.transform}>
                    <line x1="0" y1="15" x2="40" y2="15" style={style} />
                    <line x1="0" y1="25" x2="40" y2="25" style={style} />
                    <text x={15} y={10} style={{fontSize:'10'}}>N</text>
                    {tracks}
                </g>
            </svg>
        )
    }
})