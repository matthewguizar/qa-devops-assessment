const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffles array should return array of the same length', () => {
       let arr = [1, 2, 3, 4, 5]
       let result = shuffleArray(arr)
       expect(result.length).toEqual(arr.length)
    })

    test('shufflesarray should return array', () => {
        let arr = [1, 2, 3, 4, 5]
        let result = shuffleArray(arr)
        expect(result).toHaveProperty('length')
     })

     test('shuffles array should return array to return an array with the same items', () => {
        let arr = [1, 2, 3, 4, 5]
        let result = shuffleArray(arr)
        expect(result).toEqual(expect.arrayContaining(arr))
     })
})