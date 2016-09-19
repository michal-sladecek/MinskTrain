//
//

import React from 'react'
import {LRrails, UDrails, RUrails, ULrails, LDrails, DRrails} from './rails'
import {DRUswitch, LDRswitch, RULswitch, ULDswitch, DLUswitch,LURswitch,RDLswitch,URDswitch} from './switches'
import {UDPlusOne, LRPlusOne, LRMinusOne, UDMinusOne, LRSetX, UDSetX} from './stations'
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
    'LRSETX': LRSetX,
    'UDSETX': UDSetX,
    'NOTHING': Nothing
}
export default items