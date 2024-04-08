// bind, call n apply
//object litteral
let aasavari={
    firstname:'aasavari',
    lastname:'bedade',
    displayName:function(){
        console.log(this.firstname+this.lastname)
    }
}

aasavari.displayName()


let amol={
    firstname:"ajay",
    lastname:"deni"

}

//amol.displayName()

let displayName2=aasavari.displayName
    displayName2=function(){
        console.log(this.firstname+this.lastname)
    }


//bind

//displayName2.bind(amol)()
qw=displayName2.bind(amol)
qw()


//pgm2

let sameer={
    firstname:'sameer',
    lastname:'pawar'
}

let sameer2={
    firstname:'sameer2',
    lastname:'pawar2'
}

let sameer3={
    firstname:'sameer3',
    lastname:'pawar3'
}

// let displayName3=function(){
//     console.log(this.firstname+this.lastname)
// }

// let q1=displayName3.bind(sameer)
// let q2=displayName3.bind(sameer2)
// let q3=displayName3.bind(sameer3)


//call

let displayName3 = function(greet){
    console.log(this.firstName+ this.lastName)
    console.log(greet)
}

displayName3.call(sameer,"hello")
displayName3.call(sameer2,"hello2")
displayName3.call(sameer3,"hello3")


displayName3.apply(sameer,["bye"])
displayName3.apply(sameer2,["bye2"])
displayName3.apply(sameer3,["bye3"])