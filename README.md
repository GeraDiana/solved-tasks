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
#### Sleigh Authentication
```javascript
function Sleigh() {}
  Sleigh.prototype.authenticate = function(name, password) {
  return (name === "Santa Claus" && password === "Ho Ho Ho!")
};
```
#### Is n divisible by x and y?
```javascript
function isDivisible(n, x, y) {
return (n % x)===0 && (n % y)===0;

}
```
#### Is this a triangle?
```javascript
function isTriangle(a,b,c)
{
return (a+b)>c && (b+c)>a && (a+c)>b;
    
}
```
#### Rock Paper Scissors!
```javascript
function rps (p1, p2) {
 if (p1=='scissors'&& p2=='paper'){
 return 'Player 1 won!' }
 else if (p1=='scissors'&& p2=='rock'){
 return 'Player 2 won!' }
 else if (p1=='rock'&& p2=='scissors'){
 return 'Player 1 won!' }
 if (p1=='paper'&& p2=='scissors'){
 return 'Player 2 won!' }
 if (p1=='rock'&& p2=='paper'){
 return 'Player 2 won!' }
 if (p1=='paper'&& p2=='rock'){
 return 'Player 1 won!' }
 else if (p1==p2){
 return  'Draw!'}
}
```
#### L1: Set Alarm
```javascript
function setAlarm(employed, vacation){
   return employed && (!vacation);
}
```
#### Can we divide it?
```javascript
function isDivideBy(number, a, b) {
 return  (number%a)===0 && (number%b)===0;
}
```
#### Student's Final Grade
```javascript
function finalGrade (exam, projects) {
  if(exam>90 || projects>10){
    return 100;
  } 
  if(exam>75 && projects >=5){
    return 90;
  }   
  if(exam>50 && projects>=2){
    return 75;
  } 
 return 0;
}
```
#### Calculate Two People's Individual Ages
```javascript
function getAges(sum,difference){

let age2=(difference-sum)/-2;
let age1=sum-age2;

if (age2 == -0)
  age2 = 0;

if (sum < 0) {
  return null;
}

if (difference < 0) {
  return null;
}
if (age1 < 0 || age2 < 0) {
  return null;
}

return [age1,age2] ;
};
```
#### Be Concise I - The Ternary Operator
```javascript
function describeAge(age) {
  return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}
```
#### 101 Dalmatians - squash the bugs, not the dogs!
```javascript
function howManyDalmatians(numer){
  
  var dogs =["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  var respond = numer <= 10 ? dogs[0] : (numer <= 50) ? dogs[1] : (numer < 101) ? dogs[2] : dogs[3];
  
return respond;
}
```
#### Do I get a bonus?
```javascript
function bonusTime(salary, bonus) {
  return  "£"+salary*(bonus? 10:1);

}
```
#### Training  JS #7: if.. else and ternary operator
```javascript
function saleHotdogs(n){
  return n<5 ? n *100: n>=5 && n<10?n*95:n*90 ;
}
```
#### Get Planet Name By ID
```javascript
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}
```
#### Basic Mathematical Operations
```javascript
function basicOp(operation, value1, value2){
  switch (operation) {
  case '+':
    return value1+value2;
  case '-':
    return value1-value2;
  case '*':
    return value1*value2;
  case '/':
    return value1/value2;
  }
 
}
```
#### Switch it Up!
```javascript
function switchItUp(number){
  var name;
  switch(number){
    case 1:
      return "One";
      break;
    case 2:
      return'Two'
      break;
    case 3:
      return 'Three'
      break;
    case 4:
      return  'Four'
      break;
    case 5:
      return "Five"
      break;
    case 6:
      return'Six'
      break;
    case 7:
      return 'Seven'
      break;
    case 8:
      return'Eight'
      break;
    case 9:
      return'Nine'
      break;
    case 0:
      return'Zero'
      break;
   }

}
```
####simple calculator
```javascript
function calculator(a,b,sign){
  if (typeof (b)!='number')
  return "unknown value";
  switch (sign) {
  case '+':
    return a+b;
  case '-':
    return a-b;
  case '*':
    return a*b;
  case '/':
    return a/b;
   case '$':
    return "unknown value";
 case '-':
    return a-b;
 default:
    return "unknown value";
  }

}
```
####  Power of two
```javascript
function isPowerOfTwo(n){
let x=n;
  while (x>1) {
  x=x/2;
  }
  return x===1;
}
```
#### Difference Of Squares
```javascript
function differenceOfSquares(n){
  let i=1;
  let b=0;
  let s=0;
     while (i<=n){
     b+=i;
     s+=i*i;
     i++;
  }
  return (b*b)-s;
}
```
#### No zeros for heros
```javascript
function noBoringZeros(n) {
let x=n;
while((x%10)===0 && x!==0){
 x=x/10;
  }
  return x;
}
```
#### Factorial
```javascript
function factorial(n){
  if (n===0)
    return 1;
  let i=1
  let y=1;
while (i<=n){
  y=y*i++;
  }
  return y;
}
```
#### Powers of 3
```javascript
function largestPower(n){
let k=0;
while (3**k<n){
k++;

}
  return k-1;
}
```
#### The wheat/rice and chessboard problem
```javascript
function squaresNeeded(grains){
if (grains===0)
   return 0;
  let k=1;
  let g=1;
  let s=1;
while(s<grains){
k++;
g=g*2;
s=s+g;
}
  return k ;
  }
```
#### Sum of the first nth term of Series
```javascript
function SeriesSum(n){
if(n===0)
return '0.00'; 
 let b=1;
 for (let i = 2 ; i <= n ; i++){
   b = b + 1 / (4 + 3 * (i-2));
 }
 return  b.toFixed(2) + '';
}
```
#### Grasshopper - Summation
```javascript
var summation = function (num){
let sum=0;
for(let i=1 ; i <= num; i++){
  sum=sum+i;
   }
  return sum;
}
```
#### Beginner Series #3 Sum of Numbers
```javascript
function getSum( a,b ){
let sum=0;
for(let i=Math.min(a,b) ; i <= Math.max(a,b); i++){
  sum=sum+i;
   }
  return sum;
}
```
#### Sum of Multiples
```javascript
function sumMul(n,m){
if (m<=0)
return "INVALID";
let sum=0;
for(let i=n ; i < m; i=i+n){
  sum=sum+i;
   }
  return sum;
}
```
#### Draw stairs
```javascript
function drawStairs(n) {
let s='';
 for (var i = 0; i < n; i++) {
    for (var j = 0; j < i; j++) {
      s = s+' ';
    }
    s=s+"I"+(i==n-1? '': "\n");
  }
  return s;
}
```

#### Power
```javascript
function numberToPower(number, power){
let s=1;
for (let i=1; i<=power;i++) {
  s=number*s;
}
 return s;
 
}
```
#### Is Really NaN
```javascript
const isReallyNaN = (val) => {
  
 return (typeof val) === 'number' && (''+val) === 'NaN';

}
```
#### Filter the number
```javascript
var FilterString = function(value) {
  let res='';
  for(let i=0; i< value.length; i++){
    if (value[i] >= '0' && value[i]<= '9'){
      res=res+value [i];
     }
   }
   return +res;
}
```
#### Is integer safe to use?
```javascript
function SafeInteger(n) {
return Number.isSafeInteger(n);
}
```
#### Return Negative
```javascript
function makeNegative(num) {
  let r= num<0 ? +num :-num ;
  return r;
  }
```
#### Opposite number
```javascript
function opposite(number) {
  return (-number);
}
```
#### To square(root) or not to square(root)
```javascript
function squareOrSquareRoot(array) {
  let arr=[];
  for(let i=0; i< array.length;++i){
  if ( Math.sqrt(array[i]) % 1===0) arr.push( Math.sqrt(array[i]));
  else arr.push( Math.pow(array[i],2));
  }
  return arr;
}
```
#### Regex count lowercase letters
```javascript
function lowercaseCount(str){
   return str.match(/[a-z]/g)? str.match(/[a-z]/g).length:0
}
```

#### Two Oldest Ages
```javascript
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  return ages.sort((a,b)=>a-b).slice(-2);
}
```
#### Sum of two lowest positive integers
```javascript
function sumTwoSmallestNumbers(n) {  
  n.sort((a,b)=>a-b)
  return n[0]+n[1];
}
```
####  Find Maximum and Minimum Values of a List.
```javascript
const min = list=> list.sort(( a,b)=>a-b)[0];
const max= list => list.sort (( a,b)=>b-a) [0];
```
### Sum of differences in array
```javascript
function sumOfDifferences(arr) {
if(arr.length===0) return 0;
arr.sort((a,b )=>b-a);
return arr[0]-arr[arr.length-1];
}
```
#### Sentence Smash
```javascript
const smash=words=> words.join(' ');
```
#### My head is at the wrong end!
```javascript
const fixTheMeerkat= arr =>arr.reverse();
```
#### Sum Arrays
```javascript
const sum = array => array.reduce((sum,el) =>sum+ el,0);
```
#### Invert values
```javascript
function invert(array) {
let ar=[];
for(let i=0;i<array.length;i++){
ar[i]=-array[i];
}
 return ar ;
}
```
#### BASIC: Making Six Toast.
```javascript
function sixToast(num) {
   return  Math.abs(num-6);
}
```
#### Closest elevator
```javascript
function elevator(left, right, call){
 return Math.abs (right-call) <= Math.abs(left-call)  ? "right" : "left";
   
}
```
#### Square Every Digit
```javascript
function squareDigits(num){
  let strNum=String(num);
  let result="";
  
  for(let i=0;i < strNum.length;i++){
    let squared=parseInt(strNum[i])*parseInt(strNum[i]);
    result=result+String(squared);
  }
  return parseInt(result);
  }
```
#### Squares sequence
```javascript
function squares(x, n) {
if (n <= 0) return []
  const numbers = Array.from({ length: n }, (_, index) => (index === 0 ? x : 0))
  let previousNumber = x
  const squareSequence = numbers.map((num, index, arr) => {
    const result = index === 0 ? num : previousNumber
    previousNumber = previousNumber*previousNumber
    return result
  })

  return squareSequence
}
```
#### You're a square!
```javascript
var isSquare = function(n){
      let out = Math.sqrt(n);
    return n >= 0 && (parseInt(out) === out) ? true : false;

}
```
#### Find the next perfect square!
```javascript
const isSquare = n => Number.isInteger(Math.sqrt(n))

const findNextSquare = sq => {
  if (!isSquare(sq)) return -1

  let num = sq + 1
  while (!isSquare(num)) num++


  return num;
}
```
#### Find the next perfect square!
```javascript
const isSquare = n => Number.isInteger(Math.sqrt(n))

const findNextSquare = sq => {
  if (!isSquare(sq)) return -1

  let num = sq + 1
  while (!isSquare(num)) num++


  return num;
}
```
#### Beginner Series #4 Cockroach
```javascript
function cockroachSpeed(s) {
 return Math.floor(s * 100000 / 3600);
}
```
#### Price of Mangoes
```javascript
const mango = (quantity, price) => (quantity - Math.floor(quantity / 3)) * price
```
#### Holiday VIII - Duty Free
```javascript
const dutyFree = (normPrice, discount, hol) =>
  Math.floor(hol / (normPrice * discount / 100))
```
#### All Star Code Challenge #22
```javascript
function toTime(seconds) {
    let hour = Math.trunc(seconds / 3600);
    let minutes = Math.trunc((seconds  - hour * 3600) / 60);
    return `${hour} hour(s) and ${minutes} minute(s)`
}
```
#### Tortoise racing
```javascript
function race(v1, v2, g) {
  if (v1 >= v2) return null

  const time = g / (v2 - v1)

  const h = Math.trunc(time)
  const m = Math.trunc((time * 60) % 60)
  const s = Math.trunc((time * 3600) % 60)

  return [h, m, s]
}
```
####  Formatting decimal places #1
```javascript
const twoDecimalPlaces = number => Math.trunc(number * 100) / 100
```
#### Expressions Matter
```javascript
function expressionMatter(a, b, c) {
  let r = a+b+c;
  let s = a*b+c;
  let t = a+b*c;
  let u = a*b*c;
  let v = (a+b)*c;
  let w = a*(b+c);
  return Math.max(r,s,t,u,v,w,)
}
```
#### Square(n) Sum
```javascript
function squareSum(numbers){
let sum=0;
for(let i=0; i< numbers.length;i++){
   sum=sum+numbers[i]**2;
}
return sum;

}
```
#### Lario and Muigi Pipe Problem
```javascript
function pipeFix(numbers){
  let arr=[];
  let a= Math.max(...numbers);
  let b= Math.min(...numbers);
  for (let i=b; i<=a; i++){
   arr.push (i);
  }
  return arr;
 }
```
#### Binary Addition
```javascript
const addBinary=(a,b) => (a+b).toString (2)
```
#### Convert to Binary
```javascript
const toBinary =n=> Number (n.toString(2))
```
#### Calculate Price Excluding VAT
```javascript
//return price without vat
const excludingVatPrice = price =>
  price === null ? -1 : Number(( price / 1.15).toFixed(2))
```
####  Parse nice int from char problem
```javascript
const getAge = inputString => Number (inputString.match(/\d/)[0])
```
#### Hex to Decimal
```javascript
const hexToDec = hexString => parseInt (hexString, 16)
```
#### Bin to Decimal
```javascript
const binToDec = bin => parseInt(bin, 2)
```
#### Most valuable character
```javascript
function solve(st) {
let max = 0;
 let obj = {};
 for(let i = 0; i < st.length; i++){
   obj[st[i]] = st.lastIndexOf(st[i]) - st.indexOf(st[i])
   if(obj[st[i]] > max) 
    max = obj[st[i]];
 }
 let min = 'Й';
 for(let key in obj){
   if( obj[key] === max && key < min) {
   min = key;
   }
 }
 return min
}
```
#### Parse float
```javascript
const parseF = s => (Number.isNaN(parseFloat(s)) ? null : parseFloat(s))
```
#### N-th Fibonacci
```javascript
function nthFibo(n) {
  let arr = [0, 1];
  for( let i = 2; i <= n ; i++){
    arr[i] = arr[i-1] + arr[i-2]  
  }
  return arr[n-1]
}
```
#### Count the Monkeys!!
```javascript
const monkeyCount = n => [...new Array(n)].map((_, i) => i + 1)
```
#### Filling an array (part 1)
```javascript
const arr = N => (N ? Array.from(Array(N), (_, index) => index) : [])
```
#### Training JS # 4: Basic data types--Array
```javascript
const getLength = arr => arr.length
const getFirst = arr => arr[0]
const getLast = arr => arr[arr.length - 1]
const pushElement = arr => {
  arr.push(1)
  return arr
}
const popElement = arr => {
  arr.pop()
  return arr
}
```
#### All Star Code Challenge #22
```javascript
function toTime(seconds) {
    let hour = Math.trunc(seconds / 3600);
    let minutes = Math.trunc((seconds  - hour * 3600) / 60);
    return `${hour} hour(s) and ${minutes} minute(s)`
}
```

#### A Rule of Divisibility by7.
```javascript
function seven(m) {
var i = 0;
  while(m.toString().length>2){
    m=Math.floor(m/10)-(m%10)*2;
    i++;
  }  
return [m, i];
}
```
#### "Very Even" Numbers .
```const isVeryEvenNumber = (n) => (((n - 1) % 9) + 1) % 2 === 0```

#### Absent vowel.
```javascript
function absentVowel(x){
    const char = ['a', 'e', 'i', 'o', 'u'];
    let num = 0;
    char.filter((el, i) => x.includes(el) ? num *=1 : num = i);
    return num;
}
```

#### Alphabet symmetry
```javascript
function solve(arr){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let  num = []; let count;
    for (let i = 0; i < arr.length; i++){
        count = 0;
        for (let j = 0; j < arr[i].length; j++){
            arr[i] = arr[i].toLowerCase();
            if (arr[i][j] === alphabet[j]) count++;
        }
        num.push(count);
    }
    return num;
}
```

#### All Star Code Challenge # 14
```javascript
const median = (array) => {
  const sortedDonations = [...array].sort((a, b) => a - b)

  const { length } = sortedDonations
  const halfLength = Math.floor(length / 2)

  const middleNumber = sortedDonations[halfLength]
  const previousMiddleNumber = sortedDonations[halfLength - 1]

  const median = length % 2 === 0 ? (middleNumber + previousMiddleNumber) / 2 : middleNumber
  return median
}
```
#### Are they the "same"?
```javascript
function comp(array1, array2) {
  if (!array1 || !array2) return false

  const a1 = [...array1].sort((a, b) => a - b)
  const a2 = [...array2].sort((a, b) => a - b)
  const a1Squared = a1.map(number => number**2)

  return JSON.stringify(a1Squared) === JSON.stringify(a2)
}
```
#### Create Phone Number
```javascript
function createPhoneNumber(numbers) {
  const numbersString = numbers.join('')
  const firstPart = numbersString.slice(0, 3)
  const secondPart = numbersString.slice(3, 6)
  const thirdPart = numbersString.slice(6, 10)

  return `(${firstPart}) ${secondPart}-${thirdPart}`
}
```
