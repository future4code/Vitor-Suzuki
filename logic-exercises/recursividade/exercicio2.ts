const calculateSum = (n1: number, n2: number) => {
    if (n1 === 0) {
        return n2
    }

    return calculateSum(n1 - 1, n2 - n1)
}