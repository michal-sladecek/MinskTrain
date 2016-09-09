//
//

import React from 'react'
import {LRrails, UDrails, RUrails, ULrails, LDrails, DRrails} from './rails'
import {DRUswitch, LDRswitch, RULswitch, ULDswitch} from './switches'
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
    'NOTHING': Nothing
}
export default items