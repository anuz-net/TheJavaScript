// We are given array of marks of Students. Filter out the marks of students that scored 90+.
let arr = [ 39, 56, 77, 80, 92, 91, 96];

let marks = arr.filter((val)=>{
    return val>90;
});
console.log(val);

// Take a Number N as an input from user. Create an array of Numbers from 1 to n. Use the reduce method to calculate sum of all numbers in array. & Multiply too..
let n = prompt("Enter a Number");
let nums = [];
for(let i=1; i<=n; i++){
    nums[i-1] = i;
}

let sumNumbers = nums.reduce((paila,aile)=>{
    return paila + aile;
});
console.log(sumNumbers);

let mux = nums.reduce((paila, dosro)=>{
    return paila * dosro;
});
console.log(mux);