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