# Solved-Tasks
#### Multiply
```javascript
function multiply(a, b){
  return a * b
}
```

#### Generate range of integers
```javascript
function generateRange(min, max, step){
  let arr = [];
  for(let i=min; i<=max; i=i+step){
    arr.push(i);
  }
  return arr;
}
```


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
```javascript
function even_or_odd(number) {
    let newNumber =(number%2)===0 ? "Even" : "Odd";
    return newNumber;
}
```

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

#### Sum The Strings
```javascript
function sumStr(a,b) {
  return  ((+a) + (+b))+"";
}
```

#### Function 1 - hello world
```javascript
function greet () {
  return "hello world!" ;
}
```

#### Training JS #1: create your first JS function and print "Helloworld!"
```javascript
function helloWorld(){
  var str = "Hello World!";
  console.log(str);
}
```

#### Breaking chocolate problem
```javascript
function breakChocolate(n,m) {
  let i=m*n-1;
   if (i<0){
      i=0;
   }
  return i;
}
```

#### I love you, a little , a lot, passionately ... not at all
```javascript
function howMuchILoveYou(nbPetals) {
 // your code
  switch (nbPetals % 6) {
  case 1:
    return 'I love you';
    break;
  case 2:
    return'a little';
    break;
  case 3:
    return'a lot';
    break; 
  case 4:
    return'passionately';
    break; 
  case 5:
    return 'madly';
    break;  
  case 0:
    return'not at all';
    break; 
   }
}
```