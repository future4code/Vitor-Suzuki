// a)

const addUp = (n) => {
    if (n > 0)
        return addUp(n - 1);
    return n
}

// b)

const addUpReverse = (n) => {
    if (n > 0)
        return n;
    return addUpReverse(n - 1);
}