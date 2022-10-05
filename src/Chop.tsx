export class KarateChop {

    public binarySearchByLoop(target: number, array: number[]): number {
        let resultIndex = -1
        let minIndex = 0
        let maxIndex = array.length - 1

        if (array.length === 0) return resultIndex

        while (minIndex <= maxIndex) {
            let midIndex = Math.floor((minIndex + maxIndex) / 2)
            if (array[midIndex] === target) {
                resultIndex = midIndex
                break
            } else if (array[midIndex] < target) {
                minIndex = midIndex + 1
            } else {
                maxIndex = midIndex - 1
            }
        }
        return resultIndex
    }

    public binarySearchByRecursive(target: number, array: number[]): number {
        if (array.length === 0) return -1

        return this.recursive(target, array, 0, array.length - 1)
    }

    private recursive(target: number, array: number[], minIndex: number, maxIndex: number): number {
        let midIndex = Math.floor((minIndex + maxIndex) / 2)

        if (minIndex > maxIndex) return -1

        if (array[midIndex] === target) {
            return midIndex
        } else if (array[midIndex] < target) {
            return this.recursive(target, array, midIndex + 1, maxIndex)
        } else {
            return this.recursive(target, array, minIndex, midIndex - 1)
        }
    }

    public binarySearchByArraySlices(target: number, array: number[]) {
        if (array.length === 0) return -1



    }
}
