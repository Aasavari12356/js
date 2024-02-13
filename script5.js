// if (5 == 6){
//     console.log('Hello')
// }
// else{
//     console.log('Bye')
// }

//  x1=50
//  y1=60
//  if(x1 > y1){
//     console.log("x1 is greater")
//  }
//  else{
//     console.log("y1 is greater")
//  }

//ternary operator
// let x1=20
// let y1=30
// x1 > y1 ? console.log("x1 is greater"): console.log("y1 is greater")

// age=19
// result=age>18? console.log("can drive"): console.log("can't drive")


// //switch case
// //without break
// city="Jaipur"
// switch (city){
//     case"mumbai":
//     console.log("MH")

//     case"Jaipur":
//     console.log("RJ")

//     case"Indore":
//     console.log("MP")

//     default:
//         console.log("city is not found")
// }


// city = "pune"
// switch (city) {
//     case "pune":
//     case "nashik":
//         console.log("MH")
//         break
//     case "jaipur":
//     case "udaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log("city is not found")
// }

x1=20
y1=400
z1=60
isgreater=true
switch (isgreater){
    case x1>y1 && y1>z1:
    console.log("x1 is greater")
    break 
    case y1>z1 && z1>x1:
        console.log("y1 is greater")
        break
        default:
            console.log("z1 is greater")

}