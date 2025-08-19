// Map Method .....
// Similar to ForEach

let nums = [60, 78, 77];
let newArr = nums.map((val)=>{
    console.log(val);
});


//Filter Method
// array ko 1 1 indivisial ma gayera value filter garneee..

// Filtering Even Numbves from Array

let num = [1, 2, 3, 4, 5, 6];
let newNum = num.filter((val)=>{
    return val%2 === 0;
});

console.log(newNums);


// Reduce Method
// Input ma Dherai huda Output ma Auta Print garna cha vne -->

const array1 = [1,3,4,5,6];
const inValue = 0;

const output = array1.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);