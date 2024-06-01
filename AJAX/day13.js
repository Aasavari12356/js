function getUserID(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
       // console.log(response.data)
        return response.data
    })
}

//getUserID(1)

function raceP(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve('refresh')
        },100)
    })
}

function renderHTML(element){
    document.write(`<h1>${element.first_name}<h1>`)
    document.write(`<h1>${element.last_name}<h1>`)
    document.write(`<h1>${element.email}<h1>`)
    document.write(`<h1>${element.id}<h1>`)
    document.write(`<img src = ${element.avatar}>`)

}

// Promise.all([
//     getUserID(1),
//     getUserID(2),
//     getUserID(3)
// ])
// .then(function(user){
//     console.log(user)
//     user.forEach(function(element){
//         renderHTML(element)
//     })
// })

// .catch(function(err){
//     console.log(err)

// })


//Promise.allsettled()

// Promise.allSettled([
//     getUserID(3),
//     getUserID(2),
//     getUserID(2221)
// ])
// .then(function(arr){
//     console.log(arr)

// })


//Promise.race()



// Promise.race([
//     getUserID(1),
//     raceP()
// ]).then(function(str){
//     console.log(str)
// })


//Promise.any()

Promise.any([
    Promise.reject('bye'),
    raceP(),
    getUserID(1)
]).then(function(str){
    console.log(str)
})

