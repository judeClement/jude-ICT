console.log('hello');

let a=10;
let b=10;
if (a>b) { console.log('a is greater than b')
    
} else  if (a==b)
{
    console.log('a and b are equal')
}
else {
console.log('b is greater than a')
}

function sub(sub1,sub2){
var diff =sub1-sub2;
return diff;
}
var result=sub(20,10);
console.log('differance is '+result)

function mul(mul1,mul12){
    var prod =mul1*mul12;
    return prod;
    }
    var result2=mul(20,10);
    console.log('product is '+result2)

function div(div1,div2){
     var answer=div1/div2;
    return answer;
    }
    var result3 =div(20,10);
    console.log('answer is '+result3)
        
let array=[1,2,3,4,5]
for (let i = 0; i < array.length; i++) {
console.log(array[i]);
}

let j=0;
while (j<10) {
    console.log(j);
    j++    
}