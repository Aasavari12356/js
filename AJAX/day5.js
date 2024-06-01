//Promise.all()
//Promise.race()
//Promise.allSettled()
//Promise.any()

//for those method ther are 2 ways 
//1st-----> .then (old method)
//2nd-----> async await(new method-- top over rapper class)

//Promise.all 
//(it get shortcircuit when it get one reject state, n get array return when all state r in resolve state)

// Promise.all([
//     Promise.resolve("Hello"),
//     Promise.resolve("Hi"),
//     Promise.reject("bye")
// ])
// .then(function(a){
//     console.log(a)
// })
// .catch(function(){
//     console.log("rejected")
// })


//Promise.allSettled()
// in array both state get return----> resolve hoga to fulfilled aayaga n value milegi n --- fail hua to reject hoga n reson milga
// promise class name hai aue humesha array pass hoga 
//execution is done in parallel.


// Promise.allSettled([
//     Promise.resolve("Hello"),
//     Promise.resolve("Hi"),
//     Promise.reject("bye")
// ])
// .then(function(a){
//     console.log(a)
// })

// //Promise.race()
// // 2 promises are exected at same time , jiska o/p 1st aayega wo show hoga , bhale uska o/p reject hua hoga.
//.then always resolve state are running
// .catch always reject state are running
// //1.1
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
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(str){
//     console.log(str)
// })
//1.2
// function proOne(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("hello")
//         },1000)
//     })
// }

// function proTwo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("bye")
//         },2000)
//     })
// }

// Promise.race([
//     proOne(),
//     proTwo()
// ])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(str){
//     console.log(str)
// })






// Promise.any()

//failed state always ignore....>reject completely ignore karta hai.
//agar 5 state parallel execute ho rahi hai aur usmai 3-4 state reject hai to wo reject state ko completely ignore karega.
//resolve aaya to 1st resolve state par shortckt hoga second state ko dekhega bhi nahi.
Promise.any([
    Promise.reject("hi"),
    Promise.reject("hello"),
    Promise.resolve("Good bye"),
    Promise.resolve("bye")
])
.then(function(str){
    console.log(str)
})


function addA(){
    console.log("a")
}
function addB(){
    console.log("b")
}

addA()
addB()