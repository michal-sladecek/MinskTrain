import React from 'react'
import {LRrails, UDrails, RUrails, ULrails, LDrails, DRrails} from './rails'
import {DRUswitch, LDRswitch, RULswitch, ULDswitch} from './switches'
import {Erase, Nothing} from './helpers'
const  items = {
//Headers for menu
    'rails': React.createElement(LRrails),
    'switches': React.createElement(RULswitch),
    'helpers': React.createElement(Erase),
//Items
    'LR': React.createElement(LRrails),
    'UD': React.createElement(UDrails),
    'RU': React.createElement(RUrails),
    'UL': React.createElement(ULrails),
    'LD': React.createElement(LDrails),
    'DR': React.createElement(DRrails),
    'DRU': React.createElement(DRUswitch),
    'LDR': React.createElement(LDRswitch),
    'RUL': React.createElement(RULswitch),
    'ULD': React.createElement(ULDswitch),
    'ERASER': React.createElement(Erase),
    'NOTHING': React.createElement(Nothing)
}
export default items