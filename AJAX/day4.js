// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)
//     setTimeout(function(){
//         console.log("get ID")
//     },2000)
//     setTimeout(function(){
//         console.log("get Info")
//     },1000)
// }
// getInfo()


//pgm2

// function getInfo(){
//     setTimeout(function(){
//         console.log("user created"),
//         setTimeout(function(){
//             console.log("get ID"),
//             setTimeout(function(){
//                 console.log("get Info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()

//pgm3

// function userCreated(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("user created")
//         },3000)
//     })
// }

// function userID(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("get ID")
//         },2000)

//     })
// }

// function userInfo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("get Info")
//         },1000)
//     })
// }
// userCreated()

// .then(function(str){
//     console.log(str)
//     return userID()
// })
// .then(function(str){
//     console.log(str)
//     return userInfo()
// })
// .then(function(str){
//     console.log(str)
// })


//asyn awaits
// async function userInfo2(){
//     let a= await userCreated()
//     console.log(a)
//     let b= await userID()
//     console.log(b)
//     let c= await userInfo2()
//     console.log(c)

    
// }
// userInfo2()



// async code -------- sync 
// user create  ----- get id ------- get info

// call     ---- 2
// callB    -----2
// callC    -----2

// promise  ---- promise combinators -- 4 methods 

//promise.race()
//proimse.any()
//promise.allSettled()
//promise.all()

//Promise.all------> If all promises e resolve them promise.all get run bt 1 reject then it will give error.
// for that situation catch is used

// Promise.all([
//     Promise.resolve("Hello"),
//     Promise.resolve("Bye"),
//     Promise.reject("Hi")
// ])

// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(){
//     console.log("not all resolved")

// })


//Promise.allSettled
// this run for both resolve n reject... in retun array
// it will give resolve for o/p n for reject give reason


// Promise.allSettled([
//     Promise.resolve("Hello"),
//     Promise.resolve("Bye"),
//     Promise.reject("Hi")
// ])

// .then(function(arr){
//     console.log(arr)
// })

// //Promice.race
// //dono mai se jiska o/p 1st aayega wo show karega

// function proOne(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("hello")
//         },3000)

//     })
// }
// function proTwo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("bye")
//         },2000)
//     })
// }
// Promise.race([
//     proOne(),
//     proTwo()
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })


//Promise.any
//llel execution

Promise.any([
    Promise.reject("hi"),
    Promise.reject("hello"),
    Promise.any("bye")
])