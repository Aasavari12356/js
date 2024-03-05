// console.log(students[0].firstName )

let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        age: 12,
        skills: ["python", "javascript", "django"],
        city: "pune"
    },
    {
        firstName: "sarika",
        lastName: "pansare",
        age: 23,
        skills: ["python", "javascript", "cypress"],
        city: "mumbai"
    },
    {
        firstName: "amol",
        lastName: "rao",
        age: 25,
        skills: ["python", "html", "cypress"],
        city: "nagpur"
    },
    {
        firstName: "mayuri",
        lastName: "rao",
        age: 35,
        skills: ["testing", "html", "cypress"],
        city: "pune"
    }

]

console.log(students[1].firstName)
console.log(students[0].skills[2])
q1=students[1].skills.push('selenium')
console.log(q1)

// firstName of all students
for(i=0;i<students.length;i++){
    console.log(students[i].firstName)
}

students.forEach(function(el){
    console.log(el.firstName)
    console.log(el['city'])
})

// student with pune city
for(i=0;i<students.length;i++){
    if (students[i].city == 'pune'){
        console.log(students[i].firstName)
    }
}

students.forEach(function(el){
    if (el.city =='pune'){
        console.log(el.firstName)
    }
})

// filter

q2=students.filter(function(el){
    return el.city=='pune'
})
console.log(q2)

q2.forEach(function(el){
    console.log(el.firstName)
})

//student in pune and age above 30
for(i=0;i<students.length;i++){
    if(students[i].city=='pune' && students[i].age>30){
        console.log(students[i].firstName)
    }
}

// students.forEach(function(el){
//     if (students[i].city=='pune'&&students[i]>age){
//         console.log(students[i].firstName)
//     }
// })

// add css skill to every student
 students.forEach(function(el){
    el.skills.push('css')
 })