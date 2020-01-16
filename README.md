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
```javascript
const closestMultiple10 = num => {
 nNum=num/10;
  return(Math.round(nNum))*10;
 };
```
#### Keep Hydrated!
```javascript
function litres(time) {
 let litres=time*0.5;
 return (Math.floor(litres));
}
```
#### Count Odd Numbers below n
```javascript
function oddCount(n){
 let i=n/2;
 return (Math.floor(i));
}
```
#### Century From Year
```javascript
function century(year) {
  let cent=year/100;
  return (Math.ceil(cent));
}
```
#### Keep up the hoop
```javascript
function hoopCount (n) {
  i = n >=10 ?  "Great, now move on to tricks" :"Keep at it until you get it" ;
   return ( i );
}
```
#### Chuck Norris VII - True or False? (Beginner)
```javascript
function ifChuckSaysSo() {
  return 100===99;
};
```
#### Simple Comparison?
```javascript
function add(a, b){
 return a===''+ b||''+a===b||a===b ;

}
```

#### Is he gonna survive?
```javascript
function hero(bullets, dragons){
 return bullets/2 >= dragons;
}
```
#### Determine offspring sex based on genes XX and XY chromosomes
```javascript
function chromosomeCheck(sperm) {
  if(sperm ==='XY'){
  return "Congratulations! You're going to have a son."
  } else if 
  (sperm ==='XX'){
  return"Congratulations! You're going to have a daughter."
  }
  }
```
#### What's the real floor?
```javascript
function getRealFloor(n){
if (n<=0){
  return n
} else if ( n<=13) {
  return n-1
} else if 
(n>=14){
  return n-2
 } 

}
```

#### Calculate BMI
```javascript
function bmi(weight, height) {
 let bodyMassIndex = weight/height**2 ;
 if (bodyMassIndex <= 18.5){
    return "Underweight";
  } else if  (bodyMassIndex <= 25.0){
    return "Normal";
  } else if (bodyMassIndex <= 30.0){
    return "Overweight";
  } else if (bodyMassIndex > 30.0){
    return "Obese";
  }
}
```
#### Alan Partridge II - Apple Turnover
```javascript
function apple(x){
return x**2>1000? 'It\'s hotter than the sun!!': 'Help yourself to a honeycomb Yorkie for the glovebox.'
}
```
#### Simple multiplication
```javascript
function simpleMultiplication(number) {
  if(number % 2){
    return number*9;
  } else {
    return number*8;
  }  
}
```
####Sleigh Authentication
```javascript
function Sleigh() {}
  Sleigh.prototype.authenticate = function(name, password) {
  return (name === "Santa Claus" && password === "Ho Ho Ho!")
};
```