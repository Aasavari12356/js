//map
//pgm1
let roles=new Map()
let roles3=new Map(
    [
        [1,"admin"],
        [2,"manager"],
        [3,"customer"]
    ]
)
console.log(roles3)

//pgm2
let q1=roles3.size
console.log(q1)

j1=roles3.get(3)
console.log(j1)

roles3.set(4,"support")
console.log(roles3)

roles3.forEach(function(k,v){
    console.log(k,v)
})
//key



for (let key of roles3.keys()){
    console.log(key)
}
//value
for (let value of roles3.values()){
    console.log(value)
}


//has
let q2=roles3.has(3)
console.log(q2)

//clear()
// roles3.clear()
// console.log(roles3)

//delete()
roles3.delete(2)
console.log(roles3)

//array
let names=["purva","anjali","swati","sayali","anjali"]
console.log(names)

// define without elements 

names= new Set()
console.log(names)

// with elements
let names3 = new Set(["purva","anjali","swati","sayali","anjali"])
console.log(names3)

names3.add("ved")
console.log(names3)

names3.delete('sayali')
console.log(names3)

s1=names3.has('purva')
console.log(s1)

names3.forEach(function(el){
    console.log(el)
})

for(let key of names3.keys()){
    console.log(key)
}

for (let value of roles3.values()){
    console.log(value)
}

for (let[k,v] of roles3.entries()){
    console.log(k,v)
}




// name3=("purva","anjali","swati","sayali","anjali")
// console.log(name3)

