function factorialIterativly(n) {
    let total = 1;
    for (let i = n; i > 1; i--) {
        total *= i;
    }
    return total;
}

console.log(factorialIterativly(4));

function factorailRecursively(n) {
    if (n === 1) return 1;
    return n * factorailRecursively(n-1);
}

console.log(factorailRecursively(4));

// node factorial.js