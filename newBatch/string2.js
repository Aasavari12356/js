//Intro


//  string contact 

// string + string  -------> string 
// string + number  -------> string 
// number + string  -------> string 
// number + number  -------> number


//pgm1
let a=10
let b= "hello"
let c=5

console.log(a+b+c)   //n+s+n----->s+n---->s

console.log(a+c+b)   //n+n+s---->n+s--->s

console.log(b+a+c)   //s+n+n ---->s+n--->s

//pgm2

let firstname='Aasavari'
let lastname='Bedade'
console.log('My firstname is'+firstname+'and my lastname is '+lastname)

console.log(`My firstname is ${firstname} and my lastname is ${lastname}`)


//------------------------------------------------------------------------------------------------------------------------
// Methods and Properties 
// Object  ---- properties and methods 

// gym --- 
// action - excercise
// return - health



let fn = "Aasavari"
console.log(fn)
console.log(typeof fn)
console.log(fn.length)

//touppercase()
let fn1='aasavari'
q1=fn1.toUpperCase()
console.log(q1)



//tolowercase()

let ln1='Bedade'
q2=ln1.toLowerCase()
console.log(q2)

//indexof()

let city= ' mumbai'
q3=city.indexOf('b')
console.log(q3)


//replace()

let s='I like sea'
q4=s.replace('sea','beach')
console.log(q4)


//includes()
let fruits='apple'
a1 = fruits.includes('a')
 a2 = fruits.includes('app')
 a3 = fruits.includes('App')

 console.log(a1)
 console.log(a2)
 console.log(a3)

