export class KarateChop {

    public binarySearchByLoop(target: number, array: number[]): number {
        let resultIndex = -1
        let minIndex = 0
        let maxIndex = array.length - 1

        if (array.length === 0) return resultIndex

        while (minIndex <= maxIndex) {
            let midIndex = Math.floor((maxIndex + maxIndex) / 2)
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

    public recursive(target: number, array: number[]) {
        return -1;
    }

    public binarySearchByRecursive(target: number, array: number[]): number {
        return this.recursive(target, array)
    }

}
