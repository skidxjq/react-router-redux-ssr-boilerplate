const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10,11];
arr.reverse().join('2');
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(arr.reverse())
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);