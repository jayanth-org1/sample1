console.log("Hello World");
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) return true;
    }
    return false;
}
