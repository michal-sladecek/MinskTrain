import React from 'react'
import {LRrails, UDrails} from './rails'
import {DRUswitch, LDRswitch, RULswitch, ULDswitch} from './switches'
import {Erase} from './erase'
const  items = [
    [React.createElement(LRrails), React.createElement(UDrails)],
    [React.createElement(DRUswitch), React.createElement(LDRswitch), React.createElement(RULswitch), React.createElement(ULDswitch)],
    [React.createElement(Erase)]
]
export default items