import React from 'react'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import messages from '../../messages/messages'


const getModalData = (type) => {
    switch(type){
        case 'UDPLUSONE':
        case 'LRPLUSONE':
        case 'LRMINUSONE':
        case 'UDMINUSONE':
        case 'DRU':
        case 'LDR':
        case 'RUL':
        case 'ULD':
        case 'DLU':
        case 'LUR':
        case 'RDL':
        case 'URD':
            return {
                inputs: [messages.enterVagon]
            }
        case 'LRSETX':
        case 'UDSETX':
            return {
                inputs: [messages.enterVagonFrom1, messages.enterVagonTo]
            }
        case 'LRPLUS':
        case 'UDPLUS':
        case 'LRMINUS':
        case 'UDMINUS':
        case 'LRMUL':
        case 'UDMUL':
        case 'LRDIV':
        case 'UDDIV':
        case 'LRMOD':
        case 'UDMOD':
            return {
                inputs: [messages.enterVagonFrom1, messages.enterVagonFrom2, messages.enterVagonTo]
            }
        default:
            return null
    }
}

const OPTIONS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

const getModalBody = (submit, type) => {
    const data = getModalData(type)
    if (!data) {
        return null
    }

    return (
        <form onSubmit={submit}>
            <Modal.Body>
                {data.inputs.map((name, i) => (
                    <FormGroup key={i}>
                        <ControlLabel>{name}</ControlLabel>
                        <FormControl componentClass="select">
                            {OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </FormControl>
                    </FormGroup>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit">
                    Nastav
                </Button>
            </Modal.Footer>
        </form>
    )
}

export default getModalBody
