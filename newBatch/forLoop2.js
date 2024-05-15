// loops


// for(intialization ; conditionCheck ; increment/Decrement){
//     // statements
// }

//pgm1
i=5
for(i=0;i<=5;i=i+1){
    console.log(i)
}

i=20
for(i=2;i<=20;i=i+2){
    console.log(i)
}

i=-50
for(i=50;i>4;i=i-5){
    console.log(i)
}

//i=hello
for(i=0;i<=3;i++){
    console.log("hello")
}

//pgm2
// break statement
//1 2 3 4 5
//1 2 3 break

for(i=0;i<=5;i=i+1){
    console.log(i)
    if (i==3){
        break
    }
}

for(i=0;i<=5;i=i+1){
    if(i==3){
        break
    }
    console.log(i)
}