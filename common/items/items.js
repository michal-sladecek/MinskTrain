//
//

import React from 'react'
import {LRrails, UDrails, RUrails, ULrails, LDrails, DRrails} from './rails'
import {DRUswitch, LDRswitch, RULswitch, ULDswitch, DLUswitch,LURswitch,RDLswitch,URDswitch} from './switches'
import {UDPlusOne, LRPlusOne, LRMinusOne, UDMinusOne, LRSetX, UDSetX, LRPlus,
     LRMinus, UDPlus, UDMinus, LRMul, UDMul, LRMod, UDMod, LRDiv, UDDiv} from './stations'
import {Nothing} from './helpers'
const  items = {
    'LR': LRrails,
    'UD': UDrails,
    'RU': RUrails,
    'UL': ULrails,
    'LD': LDrails,
    'DR': DRrails,
    'DRU': DRUswitch,
    'LDR': LDRswitch,
    'RUL': RULswitch,
    'ULD': ULDswitch,
    'DLU': DLUswitch,
    'LUR': LURswitch,
    'RDL': RDLswitch,
    'URD': URDswitch,
    'LRPLUSONE': LRPlusOne,
    'UDPLUSONE': UDPlusOne,
    'LRMINUSONE': LRMinusOne,
    'UDMINUSONE': UDMinusOne,
    'LRMINUS': LRMinus,
    'LRPLUS': LRPlus,
    'UDMINUS': UDMinus,
    'UDPLUS': UDPlus,
    'LRSETX': LRSetX,
    'UDSETX': UDSetX,
    'NOTHING': Nothing,
    'LRMUL': LRMul,
    'UDMUL': UDMul,
    'LRDIV': LRDiv,
    'UDDIV': UDDiv,
    'LRMOD': LRMod,
    'UDMOD': UDMod
}
export default items