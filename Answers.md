## 1. Write short notes on below array methods with code examples
##    • reverse()
##    • sort()
##    • fill()
##    • filter()
##    • some()
##    • every()
##    • map()
##    • forEach()
##    • reduce()
##    • indexOf()
## Ans: 
- The reverse() method reverses the order of the elements in an array.The reverse() method overwrites the original array.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
```
- sort():-
The sort() sorts the elements of an array.The sort() overwrites the original array.The sort() sorts the elements as strings in alphabetical and ascending order.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
```
- fill():-
The fill() method fills specified elements in an array with a value.The fill() method overwrites the original array.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);
```
- filter():-
The filter() method creates a new array filled with elements that pass a test provided by a function.The filter() method does not execute the function for empty elements.The filter() method does not change the original array.
```js
let arr=[1,2,3,4,5]
 let result=arr.filter((item)=>
     console.log(item*2)
 )
 ```
 - some():-
 The some() method checks if any array elements pass a test (provided as a callback function).The some() method executes the callback function once for each array element.The some() method returns true (and stops) if the function returns true for one of the array elements.The some() method returns false if the function returns false for all of the array elements.The some() method does not execute the function for empty array elements.The some() method does not change the original array.
 ```js
 let isEven=(num)=>{
    return num%2===0
}
let arr=[105,102,109,103]
let result=arr.some(isEven)
console.log(result);
```
- every():-
The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array.
```js
let arr=[1,2,3,4,5]
let isEven=(num)=>{
   return num%2===0
}
let result=arr.every(isEven)
console.log(result);
```
- map():-
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.
```js
let arr=["one","two","three"]
let result=arr.map((item)=>
console.log(item.toUpperCase())
)
```
- forEach():-
The forEach() method calls a function for each element in an array.

The forEach() method is not executed for empty elements.
```js
let arr=[1,2,3,4,5]
let double=arr.forEach((item)=>
 console.log(item*2)

 )
 ```
 -reduce():-
 The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.
```js
let arr=[150,10,5]
let myFunction=(total,num)=>{
    return total-num
}
let output=arr.reduce(myFunction)
console.log(output);
```
- intexOf():-
The indexOf() method returns the position of the first occurrence of a value in a string.

The indexOf() method returns -1 if the value is not found.

The indexOf() method is case sensitive.
```js
let arr=["HTML","CSS","JS","CSS"]
console.log(arr.indexOf("CSS"));
```
## 2. write a function that takes an array of numbers as an argument and returns the sum of its elements.
## Ans:
```js
let arr=[150,10,5,10,20]
let myFunction=(total,num)=>{
    return total+num
}
let output=arr.reduce(myFunction)
console.log(output);
```
## 3. Create a function that filters strings in an array by their length.
```js
let arr=["apple","mango","orange","pineapple","banana"]
let filteredArr=arr.filter((str)=>
   str.length<6
    
)
console.log(filteredArr);
```
## 4. Create a function that returns a new array containing the square roots of each number in the original array [1,4,9,16,25]
(Math.sqrt())
## Ans:
```js
let numbers=[1,4,9,16,25]
let result=numbers.map((num)=>{
   return Math.sqrt(num)
})
console.log(result);
```


## 5. Write a function that prints the number 1 to 100. But for multiples of 3, print Fizz instead of the number, and for multiples of 5, print Buzz. For the numbers that are multiples of both 3 and 5, print FizzBuzz(write the code in the browser’s snippet and invoke the function inside the console)
## Ans: 
```js
let count=1
let outPut=[]
let counter=()=>{
    if(count%3 == 0 && count%5==0){
      outPut.push("FizzBuzz")  
    }
    else if(count%3==0){
        outPut.push("Fizz")
    }
    else if(count%5==0){
        outPut.push("Buzz")
    }
    else {
        outPut.push(count)
    }
    
    count++
    console.log(outPut)
}
counter()
```



