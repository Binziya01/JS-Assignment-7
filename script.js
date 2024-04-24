/*
let arr=[150,10,5,10,20]
let myFunction=(total,num)=>{
    return total+num
}
let output=arr.reduce(myFunction)
console.log(output);
*/


// let arr=[1,2,3,4,5]
// let double=arr.forEach((item)=>{
//     return Math.sqrt(item)
// }
// )
// console.log(double);


/*
let arr=[1,2,3,4,5]
let double=arr.map((item)=>{
return item * 2
})

console.log(double);
*/


let numbers=[1,4,9,16,25]
let result=numbers.map((num)=>{
   return Math.sqrt(num)
})
console.log(result);