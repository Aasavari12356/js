// Array method
// map
let birthyear=[1984,1985,1987,1989,1993,1995]
q=birthyear.map(function(el,index,array){
    return 2024-el
})
console.log(q)

let no=[11,22,33,44]
q2=no.map(function(el,index,array){
    return el+10
})
console.log(q2)

// filter
marks=[11,22,33,44,55,66,77,88]
q3=marks.filter(function(el,index,array){
    return el>50
})
console.log(q3)

// forEach
city=['mumbai','pune','nashik']
q4= city.forEach(function(el,index,array){
    console.log('Welcome '+el)
})

// reduce
nums=[11,22,33]
q4=nums.reduce(function(acc,el,index,array){
    return el+acc
},0)
console.log(q4)

// find
let numbers=[11,22,33,44,55,66]
q5=numbers.filter(function(el,index,array){
    return el>40
})
console.log(q5)

q6=numbers.find(function(el,index,array){
    return el>40
})
console.log(q6)

// findindex
q7=numbers.findIndex(function(el,index,array){
    return el>40
})
console.log(q7)

// every
nos=[11,22,33,44,55]
q8=nos.every(function(el,index,array){
    return el>10
})
console.log(q8)

// some
q9=nos.some(function(el,index,array){
    return el>50
})
console.log(q9)

// slice
let digit=[111,222,333,444,555,666,777,888,999]
console.log(digit.slice(3,5))


//           0   1   2   3  4    5   6   7   8   9
// let nums1 = [111,222,333,444,555,666,777,888,999,1000]
// //          -10 -9  -8  -7  -6   -5 -4  -3  -2    -1
// //nums.slice(startIndex, endIndex (not included))
// console.log(nums1.slice(3))
// console.log(nums1.slice(3,6))
// console.log(nums.slice(-10,6))
// console.log(nums.slice(1,-3))
// console.log(nums.slice(-3))
// console.log(nums.slice(-1,-3))
