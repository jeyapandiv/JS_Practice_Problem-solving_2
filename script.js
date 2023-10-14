"use strict"


// -------------------1-----------------

// let a = arrmultiple(9,10);

// function arrmultiple(x,y) 
// {
//     let new_arr = [];
//     for (let i = 0; i < y+1; i++) 
//     {
//         new_arr[i] = x*(i+1);
//     }
//     console.log(new_arr)
// }
// // -----------------2------------------

// let arr = cal([2,2,1,14,4,5,-1,-2,-3,-4,-5]);

// function cal(x) {
//     let count = 0;
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] > 0) {
//             count++
//         }
//         else {
//             sum = sum + x[i];
//         }
//     }
//     console.log("["+count+","+sum+"]");
// }

// -------------------3--------------------

// let number=10;
// let arr = [];

// for(let i=1; i<=number; i++)
// {
//     if(i % 3 == 0)
//     {
//         arr[i] = "Fizz"
//     }
//     else if(i % 5 == 0)
//     {
//         arr[i] = "Buzz";
//     }
//     else if (i%3 && i%5) 
//     {
//         arr[i] = "FizzBuzz";
//     }
//     else
//     {
//         arr[i] = i;
//     }
// }
// arr.splice(0,1);
// console.log(arr);

// --------------------4---------------------

// let arr = [1,2,3,4,6,7,8,9,10];

// for(let i = 1; i<=10; i++) {
//     if (!(arr.includes(i))){
//         console.log(i)
//     }
// }

// --------------------5---------------------

// let input = ("1 2 -4 9")

// let asc = input.split(" ");

// for (let i = 0; i < asc.length-1; i++) {
//     for (var j = i+1; j < asc.length-1; j++) {
//         if (asc[i] > asc[j]) {
//             let less = asc[i];
//             asc[i] = asc[j];
//             asc[j] = less;
//         }
//     }
// }
// console.log('"'+asc[asc.length-1]+" "+asc[0]+'"')
// console.log(asc)
