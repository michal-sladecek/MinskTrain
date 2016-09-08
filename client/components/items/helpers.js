import React from 'react'

export const Erase = React.createClass({
    render() {
        const style = {'stroke': 'rgb(255,0,0)','strokeWidth': '2' }
        return (
            <svg width='40' height='40'>
            <g >
                <line x1="0" y1="0" x2="40" y2="40" style={style} />
                <line x1="0" y1="40" x2="40" y2="0" style={style} />
            </g>
            </svg>
        )
    }
})

export const Nothing = React.createClass({
    render() {
        return (
            <svg width='40' height='40'>
            </svg>
        )
    }
})