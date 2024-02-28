let names=['soham','akay','vayu','nehaa']
console.log(typeof names)
// add,create
names.push('sita')
console.log(names)
// update
names[3]='vansh'
console.log(names)
// retrive
console.log(names[1])
//  delete
names.pop()
console.log(names)

// curd

// datatype

// let a={}-------object

// let b=[]--------array

// let c=""--------string

let students={
    'firstname':'Aasavari',
    'lastname' :'bedade',
    'rollno':13,
    'age':31
}
 console.log(typeof students)
//  dot notation  (curd)
students.city='mumbai'
console.log(students)

// /bracket 
students['language']='marathi'
console.log(students)

// dot
students.color='black'
console.log(students)


/2. Create/add

// let info = {
//     firstName: "Mayuri",
//     lastName: "Kumar",
//     rollNumber: 26,
//     age: 36
// }
// //dot notation
// info.city = "Pune"
// console.log(info)

// //bracket notation
// info["language"] = "marathi"
// console.log(info)


// info.skill=undefined
// console.log(info)

// let info = {
//     firstName: "Mayuri",
//     lastName: "Kumar",
//     rollNumber: 26,
//     age: 36
// }

// //dot notation
// info.firstName="vaibhav"
// console.log(info)
/ //bracket notation
// info['age']=40
// console.log(info)

//delet
//dot notation
// delete info.age
// console.log(info)

// //bracket notation
// delete info['firstName']
// console.log(info)


// let info = {
//     firstName: "Mayuri",
//     lastName: "Kumar",
//     rollNumber: 26,
//     age: 36
// }

//for in
/retrive all keys

// for(let key in info ){
//     console.log(key)
// }

//retrive all value
//objectName.key=value
//objectname['key']=value

// for(let key in info){
//     console.log(info.key)
// }
// //all value are undefined
// //==================================
// for(let key in info){
//     console.log(info[key])
// }


// let info = {
//     firstName: "Mayuri",
//     lastName: "Kumar",
//     rollNumber: 26,
//     age: 36
// }

// for(let key in info){
//     console.log(key,info[key])
// }