//object literal
let aasavari={
    'firstname':'aasavari',
    'lastname':'bedade',
    'age':31,
    'rollNo':15
}

let kunal={
    'firstname':'kunal',
    'lastname':'bedade',
    'age':29,
    'rollNo':14
}

//Es6 class
class  Person{
    first_name='aasavari'
    last_name='bedade'
    age=31
    rollNo=13

    display_name(){
        console.log(this.first_name+this.last_name)
    }
}    
let sawari= new Person()
console.log(sawari.first_name)
console.log(sawari.last_name)
console.log(sawari.age)
console.log(sawari.rollNo)


//pgm3
//Es2 with constructor
class PersonA {
    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.rollNo =rollNo 
        this.age = age

    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let amar = new PersonA("amar","singh",35,6)
let chinmayiC = new PersonA("chinmayi","Deshpande",32,34)
console.log(amar)
chinmayiC.city='mumbai'
console.log(chinmayiC)



