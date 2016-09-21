import React from 'react'
import {LRrails, UDrails, RUrails, ULrails, LDrails, DRrails} from './rails'
import {DRUswitch, LDRswitch, RULswitch, ULDswitch, DLUswitch, LURswitch, RDLswitch, URDswitch} from './switches'
import {Erase, Nothing} from './helpers'
import {UDPlusOne, LRPlusOne, UDMinusOne, LRMinusOne} from './stations'
import {UDSetX, LRSetX} from './setTo'
import {UDPlus, LRPlus, UDMinus, LRMinus} from './plusminus'
import {UDMul, LRMul,LRDiv, UDDiv, LRMod, UDMod} from './muldivmod'
const  items = {
//Headers for menu
    'rails': React.createElement(LRrails),
    'switches': React.createElement(RULswitch),
    'helpers': React.createElement(Erase),
    'stations': React.createElement(UDPlusOne),
    'setters': React.createElement(UDSetX),
    'plusminus': React.createElement(UDPlus),
    'muldivmod': React.createElement(LRMul),
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
    'DLU': React.createElement(DLUswitch),
    'LUR': React.createElement(LURswitch),
    'RDL': React.createElement(RDLswitch),
    'URD': React.createElement(URDswitch),
    'ERASER': React.createElement(Erase),
    'NOTHING': React.createElement(Nothing),
    'UDPLUSONE': React.createElement(UDPlusOne),
    'LRPLUSONE': React.createElement(LRPlusOne),
    'UDMINUSONE': React.createElement(UDMinusOne),
    'LRMINUSONE': React.createElement(LRMinusOne),
    'UDPLUS':   React.createElement(UDPlus),
    'UDMINUS':  React.createElement(UDMinus),
    'LRPLUS':   React.createElement(LRPlus),
    'LRMINUS':  React.createElement(LRMinus),
    'UDSETX': React.createElement(UDSetX),
    'LRSETX': React.createElement(LRSetX),
    'LRMUL': React.createElement(LRMul),
    'UDMUL': React.createElement(UDMul),
    'LRDIV': React.createElement(LRDiv),
    'UDDIV': React.createElement(UDDiv),
    'LRMOD': React.createElement(LRMul),
    'UDMOD': React.createElement(UDMul)
}
export default items