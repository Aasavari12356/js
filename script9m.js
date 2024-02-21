// // array
// let array=[]
// console.log(typeof array)

// let a= 'Aasawari'
// console.log(typeof a)
//  let b= 20
//  console.log(typeof b)

// let fruits= ['apple','chikko','jackfruit']
// // console.log(fruits)
// for (let i=0;i<fruits.length;i++){
//     // console.log(i)
//     // console.log(fruits[i])
    
// }


// //Method => forEach()
// //Loop => for loop

// pbm1 (to find out current situation/age= push method using loop)

// let birthyear= [1981,1984,1985,1987,1989,1993,1995]
// let currentage=[]
// for(i=0;i<birthyear.length;i++){
//     age=2024-(birthyear[i])
//     currentage.push(age)
// }
// console.log(currentage)


// //Map()
// //action => perform action with each element
// //return  => array

//  using method
// let result=birthyear.map(function(element,indax,array){
//     return 2024-element
// })
// console.log(result)

// // function add(){
// //    console.log("hello") 
// // }
// // add()

// pbm2
// let marks= [22,44,33,55,66,77,88]
// let greater50=[]
// for (i=0;i<marks.length;i++){
//     if (marks[i]> 50){
//         greater50.push(marks[i])
//     }
// }
// console.log(greater50)

// //filter()
// //action => compare ele based on condition
// //return => array

// let greater50=marks.filter(function(el,index,array){
//     return el > 50
// })
// console.log(greater50)
// pbm3

let scores= [ 11,22,33]
// total=0
// for (i=0;i<scores.length;i++){
//     total= total+scores[i]
// }
// console.log(total)
//  reduced()

// //reduced()
// //action => return single value

let total=scores.reduce(function(acc,el,index,array){
    return acc+el
},0)
console.log(total)

// pbm4
let cities= ['mumbai','pune','nashik']
// for (i=0;i<cities.length;i++){
//     console.log('welcome '+ cities[i])
// }

// //forEach()

cities.forEach(function(el,index,array){
    console.log('Welcome '+el)
})
// student.forEach(function(el,index,arr){
//    console.log('Hello '+el)
// })