//loop


//function => repatative operation avoid

//loop => repetative operation perform based on condition

//1-5 

for(let i=1;i<=5;i++){
    console.log(i)
}

//minskole 4

for (let i=1;i<=4;i++){
    console.log('minskole')
}

//for loop => duration

//while loop => duration is not known

//syntax

//initialization
//while(condition){
//statemnets

//increament/decreament
//}


//1-5
i1=1
while(i1<=5){
    console.log(i1)
    i1++
}

//10-1
i2=10
while(i2>=1){
    console.log(i2)
    i2--
}

//table 8
i3=8
while(i3<=80){
    console.log(i3)
    i3=i3+8
}

//break

//1-5  3  => 1 2 3


i4=1
while(i4<=5){
    if(i4==3){
        break
    }
    console.log(i4)
    i4++
}

i5=1
while(i5<=3){
    console.log(i5)
    if (i5==3){
        break
    }
    i5++
}




//continue

//1-5 3  => 1 2 4 5

let i6 = 1 //1
while (i6 <= 5) { //1<=5 2<=5 3<=5 4<=5 5<=5 6<=5
    if(i6==3){ //1==3 2==3 3==3 4==3 5==3
        i6++ //4
        continue
    }
    console.log(i6) //1 2 4 5
    i6++ //2 3 5 6
}
