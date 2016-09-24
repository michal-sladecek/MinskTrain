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
                <path d="M7 15 h3 v3 h3 v3 h-3 v3 h-3 v-3 h-3 v-3 h3 z" transform='rotate(45 8 19)'/>
                <circle cx={8} cy={20} r={7} style={{'fill':'none','stroke': 'rgb(0,0,0)', 'strokeWidth': '2'}}/>
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
export const UDDiv = React.createClass({
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
                <circle cx={6} cy={17} r={7} style={{'fill':'none','stroke': 'rgb(0,0,0)','strokeWidth':'2'}}/>
                {tracks}
                <path d="M2 15 h9 v3 h-9 v-3 z" transform='rotate(45 6 17)'/>
            </g>
            </svg>
        )
    }
})

export const LRDiv = React.createClass({
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
                    {tracks}
                    <circle cx={20} cy={7} r={7} style={{'fill':'none','stroke': 'rgb(0,0,0)','strokeWidth':'2'}}/>
                    <path d="M16 5 h9 v3 h-9 v-3 z" transform='rotate(45 20 6)'/>
                </g>
            </svg>
        )
    }
})
export const UDMod = React.createClass({
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
                <circle cx={6} cy={17} r={7} style={{'fill':'none','stroke': 'rgb(0,0,0)','strokeWidth':'2'}}/>
                <circle cx={4} cy={20} r={1} style={{'fill':'none','stroke': 'rgb(0,0,0)','strokeWidth':'1'}}/>
                <circle cx={9} cy={14} r={1} style={{'fill':'none','stroke': 'rgb(0,0,0)','strokeWidth':'1'}}/>
                {tracks}
                <path d="M2 15 h9 v3 h-9 v-3 z" transform='rotate(45 6 17)'/>
            </g>
            </svg>
        )
    }
})

export const LRMod = React.createClass({
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
                    {tracks}
                    <circle cx={20} cy={7} r={7} style={{'fill':'none','stroke': 'rgb(0,0,0)','strokeWidth':'2'}}/>
                    <circle cx={18} cy={10} r={1} style={{'fill':'none','stroke': 'rgb(0,0,0)','strokeWidth':'1'}}/>
                    <circle cx={23} cy={4} r={1} style={{'fill':'none','stroke': 'rgb(0,0,0)','strokeWidth':'1'}}/>
                    <path d="M16 5 h9 v3 h-9 v-3 z" transform='rotate(45 20 6)'/>
                </g>
            </svg>
        )
    }
})