# Solved-Tasks
#### Multiply
```javascript
function multiply(a, b){
  return a * b
}
```

#### Generate range of integers
````javascript
function generateRange(min, max, step){
let arr = [];
for(let i=min; i<=max; i=i+step){
 arr.push(i);
  }
return arr;
}
````


#### Count of positives / sum of negatives
```javascript
function countPositivesSumNegatives(input) {
    if (input !== null && input.length > 0) {
        let countOfNums = 0;
        let sumNegNum = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] < 0) {
                sumNegNum = sumNegNum + input[i];
            }
            if (input[i] > 0) {
                countOfNums = countOfNums + 1;
            }
        }
        return [countOfNums, sumNegNum];
    }
    return [];
}
```


#### Even or Odd
````javascript
function even_or_odd(number) {
    let newNumber =(number%2)===0 ? "Even" : "Odd";
    return newNumber;
}
````

#### Sum Mixed Array
```javascript
function sumMix(x){
let sum =0;

for (let i=0; i<x.length; i++){
   sum = sum + parseInt(x[i]);
   }
   return sum;
}
```