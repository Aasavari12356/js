// //pgm1
// function additionA(){
//     console.log("A is executed")
// }

// function additionB(){
//     console.log("B is executed")
// }

// additionA()
// additionB()

// //pgm2
// function subtractionB(){
//     console.log("B is excuted")
// }

// function subtractionA(){
//     console.log("A is executed")
// }

// subtractionB()
// subtractionA()


// //pgm3
// //create user -------> get user --------> get info

// function student(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("get ID")
//     },2000)

//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }

// student()


//pgm4

function student(){
    setTimeout(function(){
        console.log("user created"),
        setTimeout(function(){
            console.log("get ID"),
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}

student()


// async code ---- sync ----- promises
// sai 2k ------- 1month   -----2k
// pending    --- resolve(function)   ------ reject(function)