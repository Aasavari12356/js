//async vs sync

// function add1(){
//     console.log("Javscript")
// }

// function add2(){
//     console.log("Python")
// }

// add1()
// add2()

// //pgm2

// function add3(){
//     setTimeout(function(){
//         console.log("SQL")
//     },2000)
// }
// function add4(){
//     console.log("Cypress")
// }

// add3()
// add4()


//pgm3

// function info(){
//     setTimeout(function(){
//         console.log("user created")
//     },4000)

//     setTimeout(function(){
//         console.log("get ID")
//     },3000)

//     setTimeout(function(){
//         console.log("get info")
//     },2000)
// }
// info()


//pgm4

// function info(){
//     setTimeout(function(){
//         console.log("created user"),
//         setTimeout(function(){
//             console.log("get ID"),
//             setTimeout(function(){
//                 console.log("get info")
//             },2000)
//         },3000)
//     },4000)
// }
// info()

//pgm5

// promises ---> pending,resolve n reject

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 20
//     if (a == b) {
//         resolve("hello")
//     }
//     else {
//         reject("Bye")
//     }
// })

////pg 1
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

////pg 2
// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

////pg 3
// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("I will always run")
// })

////pg 4
// pro
// .then(function(str){
//     console.log(str)
//     return "hello2"
// })
// .then(function(str){
//     console.log(str)

// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run ")
// })


//------------------------------>
function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("userCreated")
        },3000)
    })
}
function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getId")
        },2000)
    })
}
function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getInfo")
        },1000)
    })
    
}

//promise consume

userCreated()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo
// })
// .then(function(str){
//     console.log(str)
// })

async function getUserInfo(){
    let a = await userCreated()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c  = await getInfo()
    console.log(c)

}
getUserInfo()