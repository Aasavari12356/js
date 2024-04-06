// //pgm1
// let ram={
//     first_name:'ram',
//     last_name:'jadhav',
//     displayname:function(){
//         console.log(this.first_name+this.last_name)
//     }

// }

// let sameer={
//     first_name:'sameer',
//     last_name:'aadke',
//     displayname:function(){
//         console.log(this.first_name+this.last_name)
//     }
// }

// //pgm2
// class Person{
//     firstname='aasavari'
//     lastname='bedade'
//     displayname(){
//         console.log(this.firstname+this.lastname)
//     }

// } 
// amol=new Person()
// aasavari=new Person()
// aasavari.firstname="aasavari b"

// //pgm3
// //constructor
// class PersonA{
//     constructor(fn,ln){
//         this.firat_name=fn
//         this.last_name=ln
//     }
//     displayName(){
//         console.log(this.firat_name+this.last_name)
//     }
    
// }
// let nilam=new PersonA('nilam','sangle')

// //pgm4
// class PersonB{
//     setFirstName(fn){
//         this.firstName=fn
//     }

//     setLastName(ln){
//         this.lastName=ln
//     }

//     getFirstName(){
//         return this.firstName
//     }

//     getLastName(){
//         return this.lastName
//     }
// }

// ajay=new Person()
// ajay.set.FirstName('ajay')
// ajay.LastName('dani')

//pgm5

let info = {
    first_name:"chinmay",
    last_name:"deshpande"
}

info.first_name = "ram"
info.city = "pune"


class PersonE {

    set fn(fn){
        this.first_name = fn
    }
    set ln(ln){
        this.last_name = ln
    }

    get fn(){
        return this.fn
    }
    get ln(){
        return this.ln
    }

}