import React from 'react'
import {LRrails, UDrails, RUrails, ULrails, LDrails, DRrails} from './rails'
import {DRUswitch, LDRswitch, RULswitch, ULDswitch} from './switches'
import {Erase, Nothing} from './erase'
const  items = [
    [React.createElement(LRrails), React.createElement(UDrails), React.createElement(RUrails),
     React.createElement(ULrails), React.createElement(LDrails), React.createElement(DRrails)],
    [React.createElement(DRUswitch), React.createElement(LDRswitch), React.createElement(RULswitch), React.createElement(ULDswitch)],
    [React.createElement(Erase)],
    [React.createElement(Nothing)]
]
export default items