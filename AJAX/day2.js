//synch code

//synch code---> asynch code (setTimeout Function)

//asynch---> synch (for dependency flow)
//    2types--->  call back hell(old) ------> tightly coupled
//          --->  promises (new ES6)  ------> easy, .then


// Promises

let Pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("Hello")
    }
    else {
        reject("Bye")
    }
})

Pro.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)

})


///pgm2

function additionA(){
    setTimeout(function(){
        console.log("Hi")
    },3000)
}

function additionB(){
    console.log("hello")
}

additionA()
additionB()