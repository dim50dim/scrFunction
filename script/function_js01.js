


/////111111111111111
function isNumberInRange (num){
    if(num > 0 && num < 10){
        return true;
    }else{
        return false;
    }

}
console.log(isNumberInRange(8));
////////////22222222222
const arr = [10, 1, -1, -10, 1192, 321, 312, 16, 6, -9, 33, -34, -1, 0, -0, 8, 8, 8, 9, 4, -2, -5, 2];

    let out1 = '';
    let arr1 = [];
      for(let i = 0; i < arr.length; i++){
           if(isNumberInRange(arr[i])){
               arr1.push(arr[i]);
               out1 += arr[i] + ' ';
           }
      }
    console.log(arr1);
/////////////////333333
function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for(let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
  }
      

     let outDigit = '';
     
  for(let i = 1; i < 2021; i++){
      if(getDigitsSum(i) === 13){

          outDigit += i + ' ';
      }
    }
  console.log(outDigit);
////////////////555555555
function isEven (even) {
  if(even % 2 === 0){
      return true;
  }else {
      return false;
  }
}
console.log(isEven(58));

const arrOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let outEven = '';
let arrEven = [];
for(let i = 0; i < arrOne.length; i++){
    if(isEven(arrOne[i])){
        arrEven.push(arrOne[i]);
        outEven += arrOne[i] + ' ';
    }
}
console.log(arrEven);


