//map
let info={
    firstname:'sham',
    lastname:'chavan',
    rollno:15,
    age:40,
    1:35
}
console.log(info)

for (let key in info){
    console.log(typeof key)
}

console.log(typeof info)

let roles=new Map()
roles.set(1,"admin")
roles.set(2,"manager")
roles.set(3,"teacher")
roles.set(4,"student")
console.log("10")
console.log(10)
console.log(roles)

q1=roles.get(1)
q2=roles.get(2)
q3=roles.get(3)
q4=roles.get(4)

// pgm2
let MapB=new Map(
    [
        [1,"admin"],
        [2,"manager"],
        [3,"customer"],
        [4,"support"]
    ]
)
console.log(MapB)

let names=["akay","seema"]
let info2={"firstname":"tarun","lastname":"ahire"}

let mapC=new Map([
    [names,'student'],
    [info2,'information'],
    [true,'candrive'],
    [12,'rollno']


])

console.log(mapC)

// map method
// 1
//console.log(MapC.size)

//2 
//MapC.clear()


mapC.get(12)
mapC.set('city',"pune")
let h1 = mapC.has(12)
console.log(h1)

let mapD=new Map(
    [
        ["MH","nashik"],
        ["RJ","kanpur"],
        ["GJ","gandhinagr"]
    ]
)
mapD.forEach(function(y,x){
    console.log(y,x)
})   ///x=key,y=value


for(let key of mapD.keys()){
    console.log(key)
}

for (let val of mapD.values()){
    console.log(val)
}

for (let [k,v] of mapD.entries()){
    console.log(k,v)
}


