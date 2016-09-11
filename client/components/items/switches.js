import React from 'react'

export const DRUswitch = React.createClass({
    render() {
        let transform=''
        if(this.props.transform){
            transform=this.props.transform
        }
        const styleMain = {'stroke': 'rgb(0,0,0)','strokeWidth': '2' }
        const styleSecondary = {'fill':'none', 'stroke': 'rgb(0,0,0)','strokeWidth': '2', 'strokeDasharray':'3 3' }
        return (
            <svg width='40' height='40'>
            <g transform = {this.props.transform}>
                <line x1="15" y1="0" x2="15" y2="40" style={styleMain} />
                <line x1="25" y1="0" x2="25" y2="40" style={styleMain} />
                <path d="M25 40 Q 25 25 40 25" style={styleSecondary}/>
                <path d="M15 40 Q 15 15 40 15" style={styleSecondary}/>
            </g>
            </svg>
        )
    }
})

export const LDRswitch = React.createClass({
    render() {
        return (
            <DRUswitch transform='rotate(90 20 20)'/>
        )
    }
})

export const RULswitch = React.createClass({
    render() {
        return (
            <DRUswitch transform='rotate(270 20 20)'/>
        )
    }
})

export const ULDswitch = React.createClass({
    render() {
        return (
            <DRUswitch transform='rotate(180 20 20)'/>
        )
    }
})