
        ////    I'VE DONE ALL LOOP FROM 0 TILL 20  , COS THAT A BIT SHORTER ;
///////////11111111
let out1 = '';
for(let i = 1; i < 21; i++){
  out1 += i + '\n';
}
console.log(out1);

/////2222222
let out2 = '';
for(let i = 20; i >= 0; i--){
    out2 += i + '\n';
}
console.log(out2);
//////////33333333
let out3 = '';
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        out3 += i + '\n';
    }
}
console.log(out3);
//////////444444
let arr4 = [];
for(let i = 1; i <= 10; i++){
  arr4[i] = 'x';
}
console.log(arr4);
//////555555555
let arr5 = [];
for(let i = 0; i < 11; i++){
    arr5[i] = i;
}
console.log(arr5);
///////////6666666666
let arr6 = [];
for(let i = 0; i < 10; i++){
    arr6[i] = Math.random(i).toFixed(2);
}
console.log(arr6);

////////7777777777
let arr7 = [];
for(let i = 0; i < 11; i++){
    arr7[i] = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
}
console.log(arr7);

////////88888888
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function bingo(){
for(let i = 0; i < arr8.length; i++){
    if(arr8[i] === 5)
      break;
}
}
console.log(arr8);
/////////////////99999999999999
const arr9 = [1, 2, 3, 4, 5];
 let res = arr9.reduce((a,b) => a += b);
// let sumary = 0;
//    for(let i = 0; i < arr9.length; i++){
//        sumary +=  arr9[i];
//    }
   console.log(res);

/////////////10 10 10 10 10 10 10 

const arr10 = [1, 2, 3, 4, 5];
let arr10arr = [];
let summ = 0;
for(let i = 0; i < arr10.length; i++){
 summ = Math.pow(arr10[i], 
    2);
  arr10arr.push(summ);
}
console.log(arr10arr);
