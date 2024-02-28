let names = ["chinmay","sarika","poorva","ramesh"]
console.log(names[0])
q1=names.push("raj")
console.log(names)
q2=names.pop()
console.log(names)
names[2]='hema'
console.log(names)


// object
let info={
    'firstname':'Aasavari',
    'lastname':'bedade',
    'age':31
}
console.log(info)
// retrive
console.log(info['firstname'])
console.log(info.lastname)
// add create
info.city='mumbai'
info['language']='marathi'
// update
console.log(info)
info.lastname='avhad'
info['firstname']='sawari'
console.log(info)
// delete
delete info.city
delete info['language']
console.log(info)



let vehicle={
    'color':'red',
    'type':'sedane'
}

for(let key,value in vehicle){
    console.log(value)
    // console.log(key , vehicle[key])
}