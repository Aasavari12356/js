let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:44
}

//pgm1
//bracket notation
// console.log(info['firstName'])
// info['lastName'] = "deshpande"
// info['city']= 'pune'
// delete info['age'] 

//pgm2
//dot notation
// console.log(info.firstName)
// info.firstName = "chinmay"
// info.language = "marathi"
// delete info.rollNo

//pgm3
no=[11,22,33,44]
for(let i=0;i<no.length;i++){
    console.log(no[i])
}


let info1 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:44
}
// dot notation does not work inside loop
for(let key in info1){
    console.log(key,info1[key])

}

//pgm4
let vehicle={
    color:'red',
    type:'sedane'
}

for(let key in vehicle){
    console.log(key,vehicle[key])
}

//pgm5
let Student=[
    {
        firstname:'aasavari',
        lastname:'bedade',
    },
    {
        firstname:'pooja',
        lastname:'lokhande'
    },
    {
        firstname:'vedant',
        lastname:'vare'
    }
]

console.log(Student[0].firstname)
//------------------------------------------


    


for (let i=0;i<Student.length;i++){
    console.log(Student[i].firstname+Student[i].lastname)
}

//-------------------------------------------

for (let i=0;i< Student.length;i++){
    Student[i].language='marathi'
}
console.log(Student)

//pgm7
let info3 = {
    firstName:"survi",
    lastName:"more",
    parent:{
        mother:"Abhilasha more",
        lastName:"ishant more"
    }
}

info3.parent.mother = "survi A more"
console.log(info3)

info3.parent.sister = "Sneha more"
console.log(info3)