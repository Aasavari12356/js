let student=[
    {
        firstname:'seema',
        lastname:'nagare',
        rollNo: 31,
        age: 24
    },
    {
        firstname:'charu',
        lastname:'hirole',
        rollNo:27,
        age:34
    },
    {
        firstname:'abhay',
        lastname:'shinde',
        rollNo:34,
        age:28

    },
    {
        firstname:'tanish',
        lastname:'landge',
        rollNo:45,
        age:41
    }
]
console.log(student)

//printing 1st n lastname

student.forEach(function(el,index,arr){
    console.log(el.firstname+  el.lastname)
})


//printing 1st object 1st n lastname




//printing name of people above 30
student.forEach(function(el){
    if (el.age >30){
        console.log(el.firstname+el.lastname)
    }
})


//add property to the object country:'India"

student.forEach(function(el,index,arr){
    el.country="India"
})
console.log(student)

//add skill in object
student.forEach(function(el,index,arr){
    el.skill=["Java"]
})
console.log(student)

//add another skill 
student.forEach(function(el,index,arr){
    el.skill.push('CSS')
})
console.log(student)