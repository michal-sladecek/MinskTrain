import assert from 'assert'
import { divideArray } from '../client/functions/helpers'

describe('Helpers', () => {
    describe('#divideArray', () => {
        const originalArray = [1,2,3,4,5,6,7,8,9,10]
        it('should return divided array for threes', () => {
            let newArr = divideArray(originalArray.slice(0), 3)
            assert.equal(newArr[0][1], 2)
            assert.equal(newArr[1][1], 5)
            assert.equal(newArr[3][0], 10)
            assert.equal(newArr[3][1], undefined)
        })
        it('should return divided array for ones', () => {
            let newArr = divideArray(originalArray.slice(0), 1)
            assert.equal(newArr[0][0],1)
            assert.equal(newArr[1][0],2)
            assert.equal(newArr[3][0],4)
            assert.equal(newArr[9][0],10)
        })
    })
})

import {getNextNode, processNode, processToNextNode} from '../common/compile'

describe('Compile', () => {
    describe('#getNextNode', () => {
        let originalMap =[[{ "type": "LR", "id": 0 }, { "type": "LR", "id": 0 }, { "type": "LR", "id": 0 }, { "type": "LD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null,null, null, { "type": "RU", "id": 0 }, { "type": "LD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "DR", "id": 0 }, { "type": "UL", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "UD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "UD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "UD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "DRU", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]]
        let map =
            [[{ "type": "LR", "id": 0 }, { "type": "LR", "id": 0 }, { "type": "LR", "id": 0 }, { "type": "LD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null,null, null, { "type": "RU", "id": 0 }, { "type": "LD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "DR", "id": 0 }, { "type": "UL", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "UD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "UD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "UD", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, { "type": "DRU", "id": 0 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]]
        
        it('should return correct position of train and not change params', () => {
            let coord = {x:0, y:0}
            let dir = "L"
            let res = getNextNode(map, dir, coord)

            const expected = {coord: {x:6, y:3}, direction: "U", animationStr:"RRRDRDLDDDD"}
            
            assert.deepEqual(originalMap, map)
            assert.deepEqual(dir, "L")
            assert.deepEqual(coord, {x:0, y:0})
            assert.deepEqual(res, expected)
        })
        it('should return correct position of train after getting out of borders and not change params', () => {
            map[0][3] = { "type": "UL", "id": 0 }
            originalMap[0][3] = { "type": "UL", "id": 0 }
            let coord = {x:0, y:0}
            let dir = "L"
            let res = getNextNode(map, dir, coord)

            const expected = {coord: {x:-1, y:3}, direction: "D", animationStr:"RRRU", ending: true}
            
            assert.deepEqual(originalMap, map)
            assert.deepEqual(dir, "L")
            assert.deepEqual(coord, {x:0, y:0})
            assert.deepEqual(res, expected)
        })
        it('should return error of train after getting on tile with nothing on it', () => {
            map[0][3] = null
            originalMap[0][3] = null
            let coord = {x:0, y:0}
            let dir = "L"
            let res = getNextNode(map, dir, coord)

            const expected = {error: "BAD_OPERATION", animationStr:"RRR"}
            
            assert.deepEqual(originalMap, map)
            assert.deepEqual(dir, "L")
            assert.deepEqual(coord, {x:0, y:0})
            assert.deepEqual(res, expected)
        })
        it('should return correct position of train after getting on tile from wrong direction and not change params', () => {
            map[0][3] = { "type": "UD", "id": 0 }
            originalMap[0][3] = { "type": "UD", "id": 0 }
            let coord = {x:0, y:0}
            let dir = "L"
            let res = getNextNode(map, dir, coord)

            const expected = {error: "BAD_OPERATION", animationStr:"RRR"}
            
            assert.deepEqual(originalMap, map)
            assert.deepEqual(dir, "L")
            assert.deepEqual(coord, {x:0, y:0})
            assert.deepEqual(res, expected)
        })
        it('called on node returns the node', () => {
            map[0][0] = { "type": "DRU", "id": 0 }
            originalMap[0][0] = { "type": "DRU", "id": 0 }
            let coord = {x:0, y:0}
            let dir = "L"
            let res = getNextNode(map, dir, coord)

            const expected = {coord: {x:0, y:0}, direction: "L", animationStr:""}
            
            assert.deepEqual(originalMap, map)
            assert.deepEqual(dir, "L")
            assert.deepEqual(coord, {x:0, y:0})
            assert.deepEqual(res, expected)
        })
    })
    describe('#processNode', () => {
        //(station, direction, train, changeNumber
        let train = [1, 0 ,0 ,0]
        const stationRight = { "type": "DRU", "id": 0 }
        const stationUp = {"type": "DRU", "id": 1 }
        it("Should return correct values for DRU", () => {
            assert.equal("R", processNode(stationRight, 'D', train , (id, num) => {train[id]=num}))
            assert.equal("U", processNode(stationUp, 'D', train, (id, num) => {train[id]=num}))
            assert.equal("D", processNode(stationUp, 'R', train, (id, num) => {train[id]=num}))
            assert.equal("D", processNode(stationUp, 'U', train, (id, num) => {train[id]=num}))
            assert.equal("BAD_OPERATION", processNode(stationUp, 'L', train, (id, num) => {train[id]=num}))
        })
        it('Should be able to change train numbers', () => {
            const stationPlusOne = {"type": "LRPLUSONE", "id": 1}
            assert.equal("R", processNode(stationPlusOne, 'L', train , (id, num) => {train[id]=num}))
            assert.equal(1,train[1])
        })
    })
    describe('#processToNextNode', () => {
        //(map, direction, train, changeNumber, coord)
        const map1 = [[{"type":"LR","id":0},{"type":"LR","id":0},{"type":"LRPLUSONE","id":0},{"type":"LD","id":0},null,null,{"type":"UD","id":0},null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,{"type":"UD","id":0},null,null,{"type":"UD","id":0},null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,{"type":"UD","id":0},null,null,{"type":"UD","id":0},null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,{"type":"RU","id":0},{"type":"LDR","id":0},{"type":"LR","id":0},{"type":"ULD","id":0},null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,{"type":"UDPLUSONE","id":0},null,{"type":"UD","id":0},null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,{"type":"RU","id":0},{"type":"LR","id":0},{"type":"UL","id":0},null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]
        it('Should return correct values on path and change numbers in train accordingly', () => {
            let train = [0,0,0]
            let ret1 = processToNextNode(map1,'L', train, (id,num)=>{train[id]=num}, {x:0,y:0})
            assert.deepEqual({coord:{x:0,y:2}, direction:"L", animationStr:"RR"}, ret1)
            let ret2 = processToNextNode(map1, 'L',train, (id,num)=>{train[id]=num}, {x:0,y:2})
            assert.deepEqual({coord:{x:3,y:4}, direction:"L", animationStr:"RDDDR"}, ret2)
            assert.deepEqual([1,0,0],train)
            let ret3 = processToNextNode(map1, 'L',train, (id,num)=>{train[id]=num}, {x:3,y:4})
            assert.deepEqual({coord:{x:4,y:4}, direction:"U", animationStr:"D"}, ret3)
            let ret4 = processToNextNode(map1, 'U',train, (id,num)=>{train[id]=num}, {x:4,y:4})
            assert.deepEqual({coord:{x:3,y:6}, direction:"D", animationStr:"DRRUU"}, ret4)
            let ret5 = processToNextNode(map1, 'D',train, (id,num)=>{train[id]=num}, {x:3,y:6})
            assert.deepEqual({coord:{x:-1,y:6}, direction:"D", animationStr:"UUUU", ending: true}, ret5)
            assert.deepEqual([2,0,0], train)
        })

    })
})