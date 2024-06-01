//getuserpagewise

function getUsers(pagenumber){
    return fetch(`https://reqres.in/api/users?page=${pagenumbaer}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data[0].id
    })
}




//getUserID
function getID(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })

  
}


//renderHTML

function renderHTML(element){
    document.write(`<h1>${element.first_name}<h1>`)
    document.write(`<h1>${element.last_name}<h1>`)
    document.write(`<h1>${element.email}<h1>`)
    document.write(`<h1>${element.id}<h1>`)
    document.write(`<img src = ${element.avatar}>`)

}



getUsers(2)
.then(function(id){
    return getID(id)

.then(function(element){
    return renderHTML(element)
})    
    
})