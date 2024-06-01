//pgm1

let birthyear=[1990,1991,1992,1993]
let age=[]

for (let i=0;i<4;i++){
    //console.log(i)
    //console.log(birthyear[i])
    let a=2024-birthyear[i]
    age.push(a)
    

}
console.log(age)

//pgm2

let marks=[69,77,82,90,56]
above75=[]

for (let i=0;i<5;i++){
    if(marks[i]>75){
        above75.push(marks[i])
    }
}
console.log(above75)

//pgm3

let cities=['mumbai','pune','nashik']

for(i=0;i<3;i++){
    console.log('welcome '+cities[i])
}

//pgm4

sum=[11,22,33]
total=0

for(i=0;i<3;i++){
    total=total+sum[i]
}
console.log(total)

