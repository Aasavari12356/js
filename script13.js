// string
let first_name="Aasavari"
console.log(first_name)
last_name='bedade'
console.log(last_name)
middle_name=`nivrutti`
console.log(middle_name)

let fn='Aasavari'
ln='bedade'
//My firstName is chinmay and my lastName is deshpande
console.log('my firstname is '+fn+' and my lastname is'+ln)


// program 2 string interpolation
console.log(`my firstname is ${fn} and my lastname is ${ln}`)



// program 3

// string + number  ----> string 
// number + string  ----> string 
// string + string  ----> string
// number + number  ----> number

a=10
b=20
c='hello'

console.log(a+b+c)
console.log(a+c+b)
console.log(c+a+b)

// pgm3
let city= 'pune'
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// pgm4 
let city1 ='chandrapur'
console.log(city1.length)
for (i=0;i<city1.length;i++){
    console.log(i)
    console.log(city1[i])
}

for(i=city1.length;i>=0;i--){
    console.log(city1[i])
}

// pgm5
let city2 = 'nagpur'
i1=0
while(i1 < city2.length){
    console.log(city2[i1])
    i=i+1
}

i=city2.length
while(i>=0){
    console.log(city2[i])
    i=i-1
}

// program 5

// let city5 = "pune"
// // enup
// let revSt = ""

// for(let i = 0 ; i < city5.length ; i++){
//     //console.log(city5[i])

//     revSt = city5[i]  + revSt

//              // p     + ""  =====> p
//              // u     +  p  =====> up
//              // n     +  up  =====> nup
//              // e     +  nup ======> enup
// }
// console.log(revSt)