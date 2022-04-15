function staircase(n) {
    for (let i = 0; i <=n; i++) {
        return "#".repeat(i).padStart(n);
    }

}
console.log(staircase(5))