// push()
let names = ["aasavari","shravani","janvi"]
q1= names.push("shreya")
console.log(q1)
console.log(names)
// unshift()
q2= names.unshift("monika")
console.log(names)
// pop()
q3= names.pop()
console.log(names)
// shift()
q4= names.shift()
console.log(names)
// indexof
let animals=["tiger","lion","elephant","cat"]
q5= animals.indexOf("lion")
console.log(q5)
//include()
 q6= animals.includes("cat")
console.log(q6)
// reverse()
q7= animals.reverse()
console.log(q7)
// at()
q8= animals.at(2)
console.log(animals)
// concat
a=[11,22,33]
b=[44,55,66]
q9= a.concat(b)
console.log(q9)
// join()
let info =["Asavari","Bedade", 8108580033]
q10= info.join('-')
console.log(q10)



// DAY2
// pgm1
let birthyear= ['1989','1990','1991','1992']
ages=[]

for (i=0;i<birthyear.length;i++){
    // console.log(i)
    // console.log(birthyear[i])
    // console.log(2024-birthyear[i])
    x= 2024-birthyear[i]
    ages.push(x)
}
console.log(ages)

// pgm2
let marks=[11,22,33,44,55,66,77,88,99]
let above50=[]
for(i=0;i < marks.length;i++){
    if(marks[i]>50){
    above50.push(marks[i])
    }
}
console.log(above50)

// pgm3
let numbers=[11,22,33]
total=0
for(i=0;i<numbers.length;i++){
    // console.log(i)
    // console.log(numbers[i])
    total=total+numbers[i]

}
console.log(total)

// pgm4
let cities=["mumbai","nagpur","pune","solapur"]
for(i=0;i<cities.length;i++){
    console.log("Welcome "+cities[i])
}

