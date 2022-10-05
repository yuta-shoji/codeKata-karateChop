import {KarateChop} from './Chop'

describe('指定された数値が配列のどの位置にあるか返す', () => {
    const karateChop = new KarateChop()

    describe('binary search by Loop', () => {
        const binarySearchByLoop = karateChop.binarySearchByLoop

        test('空配列を与えられた場合は-1を返す', () => {
            expect(binarySearchByLoop(0, [])).toEqual(-1)
        })

        test('配列に指定された数値が存在する場合、そのインデックスを返す', () => {
            const actual_1 = binarySearchByLoop(1, [1])
            const actual_2 = binarySearchByLoop(1, [1, 2, 3])
            const actual_3 = binarySearchByLoop(3, [1, 2, 3, 4])
            const actual_4 = binarySearchByLoop(9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])


            expect(actual_1).toEqual(0)
            expect(actual_2).toEqual(0)
            expect(actual_3).toEqual(2)
            expect(actual_4).toEqual(8)
        })

        test('配列に指定された数値が存在しない場合、-1を返す', () => {
            const actual_1 = binarySearchByLoop(4, [1, 2, 3])
            const actual_2 = binarySearchByLoop(0, [1, 2, 3])
            const actual_3 = binarySearchByLoop(8, [1, 2, 3, 4, 5, 6, 7])


            expect(actual_1).toEqual(-1)
            expect(actual_2).toEqual(-1)
            expect(actual_3).toEqual(-1)
        })
    })

    describe('binary search by recursive', () => {
        test('空配列を与えられた場合は-1を返す', () => {
            expect(karateChop.binarySearchByRecursive(0, [])).toEqual(-1)
        })

        test('配列に指定された数値が存在する場合、そのインデックスを返す', () => {
            const actual_1 = karateChop.binarySearchByRecursive(1, [1])
            const actual_2 = karateChop.binarySearchByRecursive(1, [1, 2, 3])
            const actual_3 = karateChop.binarySearchByRecursive(3, [1, 2, 3, 4])
            const actual_4 = karateChop.binarySearchByRecursive(9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])


            expect(actual_1).toEqual(0)
            expect(actual_2).toEqual(0)
            expect(actual_3).toEqual(2)
            expect(actual_4).toEqual(8)
        })

        test('配列に指定された数値が存在しない場合、-1を返す', () => {
            const actual_1 = karateChop.binarySearchByRecursive(4, [1, 2, 3])
            const actual_2 = karateChop.binarySearchByRecursive(0, [1, 2, 3])
            const actual_3 = karateChop.binarySearchByRecursive(8, [1, 2, 3, 4, 5, 6, 7])


            expect(actual_1).toEqual(-1)
            expect(actual_2).toEqual(-1)
            expect(actual_3).toEqual(-1)
        })
    })

    describe('binary search by array slices', () => {
        test('空配列を与えられた場合は-1を返す', () => {
            expect(karateChop.binarySearchByArraySlices(0, [])).toEqual(-1)
        })

        test('配列に指定された数値が存在する場合、そのインデックスを返す', () => {
            const actual_1 = karateChop.binarySearchByArraySlices(1, [1])
            const actual_2 = karateChop.binarySearchByArraySlices(1, [1, 2, 3])
            const actual_3 = karateChop.binarySearchByArraySlices(3, [1, 2, 3, 4])
            const actual_4 = karateChop.binarySearchByArraySlices(9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])


            expect(actual_1).toEqual(0)
            expect(actual_2).toEqual(0)
            expect(actual_3).toEqual(2)
            expect(actual_4).toEqual(8)
        })
    })
})

