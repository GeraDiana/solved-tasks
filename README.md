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
#### For Twins: 2. Math operations
```javascript
function iceBrickVolume(radius, bottleLength, rimLength) {

  return 2*radius*radius*(bottleLength-rimLength);
 
}
```

#### Third Angle of a Triangle
```javascript
function otherAngle(a, b) {
return 180 -(a+b);
  }
```

#### Sum of angles
```javascript
function angle(n) {
  return (n-2)*180;
}
```

#### Convert boolean values to strings 'Yes' or 'No'.
```javascript
function boolToWord( bool ){
return  bool ? 'Yes': 'No';
}
```
#### Super Duper Easy
function problem(x){
 return typeof x ==='string'? "Error" : x*50+6
  
}
#### Type of sum
function typeOfSum(a, b) {
  return typeof (a+b);
}

#### Convert a Number to a String!
function numberToString(num) {
 return num + '';
 }
 
 #### Number toString
 ```javascript
var a = (123).toString();
```

#### Convert a String to a Number!
```javascript
var stringToNumber = function(str){
    return (Number(str));
}
```
#### Convert a Boolean to a String
```javascript
function booleanToString(b){
return b ? "true": "false";

}
```

#### Discover The Original Price
```javascript
function discoverOriginalPrice(discountedPrice, salePercentage){
  let discOriginalPrice = discountedPrice *(100 /(100-salePercentage));
  
return Math.round (discOriginalPrice*100)/100;
 
}
```

#### Formatting decimal places #0
```javascript
function twoDecimalPlaces(n) {
 (n.toFixed(2));
return Math.round (n*100)/100 ;

}
```
#### Area of a Square
```javascript
function squareArea(A){
 return Math.round(100*(A*2/Math.PI)**2)/100;
}
```
#### How many times should I go?
```javascript
function howManyTimes(annualPrice, individualPrice) {
return (Math.ceil(annualPrice / individualPrice));
}
```
#### Return the closest number multiple of 10
const closestMultiple10 = num => {
 nNum=num/10;
  return(Math.round(nNum))*10;
 };