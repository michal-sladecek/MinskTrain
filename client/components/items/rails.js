import React from 'react'


export const UDrails = React.createClass({
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
            </g>
            </svg>
        )
    }
})

export const LRrails = React.createClass({
    render() {
        return (
            <UDrails transform='rotate(90 20 20)'/>
        )
    }
})

export const RUrails = React.createClass({
    render() {
        let transform=''
        if(this.props.transform){
            transform=this.props.transform
        }
        const style = {'fill':'none','stroke': 'rgb(0,0,0)','strokeWidth': '2' }
        return (
            <svg width='40' height='40'>
            <g transform = {this.props.transform}>
                <path d="M40 15 Q 25 15 25 0" style={style}/>
                <path d="M40 25 Q 15 25 15 0" style={style}/>
            </g>
            </svg>
        )
    }
})

export const ULrails = React.createClass({
    render() {
        return (
            <RUrails transform='rotate(270 20 20)'/>
        )
    }
})
export const LDrails = React.createClass({
    render() {
        return (
            <RUrails transform='rotate(180 20 20)'/>
        )
    }
})
export const DRrails = React.createClass({
    render() {
        return (
            <RUrails transform='rotate(90 20 20)'/>
        )
    }
})