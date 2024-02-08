//pgm1 NOT
console.log(!(2 === 2))
console.log(!(2 === 3))

//pgm2 cond. statement
 let numT = 17

 if (numT > 0 && numT < 5){
console.log('10% Discount')
 }
if (numT > 5 && numT < 10){
    console.log(' 20% Discount')
}
if (numT > 10){
    console.log(' 30% Discount')
}

//pgm3 els
let numT1 = 17
if (numT1 > 0 && numT1 < 5){
    console.log(' 5% Discount')
}
else if (numT1 > 5 && numT1 < 10){
    console.log('10% Discount')
}
else if (numT1 > 10){
    console.log('20% Discount')
}
else {
    console.log('Invalid condition')
}

//pgm4
marks= 30
if (marks > 90){
    console.log('Grade A')
}
else if(marks > 70){
    console.log('Grade B')
}
else if (marks > 60){
    console.log('Grade C')
}
else{
    console.log('Fail')
}

//pgm5
a= 10
b= 20
if (a > b){
    console.log(' a is greater')
}
else if (b > a){
    console.log('b is greater')
}

//pgm6
x1= 10
x2= 20
x3= 30
if(x1 > x2 && x1 > x2){
    console.log('x1 is greater')
}
else if (x2 > x1 && x2 > x3){
    console.log('x2 is greater')
}
else if (x3 > x2 && x3 > x1){
    console.log('x3 is greater')
}


console.log("hello ")