//POM --------> Page Object Model

//Oops

//User defined ----> class

//Data type ----> string,object,set,map,number,boolean,array,DOM

//user defined type --->class defined ---> object

//object ----> properties n method

//4types
// 1) Encapsulation
// 2) Inheritance
// 3) Polymorphism
// 4) Abstraction

// 1) Encapsulation:     class ko defined karna means encapsulation,properties n method ko blk of code mai write karna i.e. called encapsulation.


class Student{
    constructor(fn,ln){
        this.firstname=fn
        this.lastname=ln
    }

    displayname(){
        console.log(this.firstname+this.lastname)
    }
}

let Amay= new Student('Amay','vagh')
console.log(Amay.firstname)
console.log(Amay.lastname)


// 2) Inheritance    

//eg 1)
   class Teacher{
    constructor(fn,ln){
        this.firstname=fn
        this.lastname=ln
    }
    displayname(){
        console.log(this.firstname+this.lastname)

    }
   }

   class Student1 extends Teacher{
    
   }

let maya= new Student1('maya','bangare')
console.log(maya.firstname)
console.log(maya.lastname)


// eg 2)

// class Teacher1{
//     constructor(fn,ln){
//         this.firstname=fn
//         this.lastname=ln
//     }
//     displayname(){
//         console.log(this.firstname+this.lastname)

//     }
//    }

//    class Student11 extends Teacher1{
//     constructor(fn,ln,spec){
//         super(fn,ln)
//         self.specialization=spec
//     }
//     displayspec(){
//         console.log(this.specialization)
//     }
    
//    }

// let maya1= new Student11('maya','bangare','salary')
// maya1.displayname()
// //maya1.displayspec()
// console.log(maya1.firstname)
// console.log(maya1.lastname)


// 3)  Polymorphism

// overloading : same class, same method name, diff. signature

class Calculator{
    addition(a,b,c,d){
        if (a!= undefined && b!= undefined && c != undefined && d != undefined){
            console.log(a+b+c+d)
        }
        else if (a!= undefined && b!= undefined && c != undefined){
            console.log(a+b+c)
        }
        else if (a!= undefined && b!= undefined ){
            console.log(a+b)
        }

    }
}

let Cal=new Calculator()
Cal.addition(2,5)
Cal.addition(2,5,5)
Cal.addition(2,5,5,5)


// pgm4  ----> overriding

class Worldbank{
    save(){
        console.log('save')
    }
    loan(){
        console.log('loan')
    }
}

class SBI extends Worldbank{
    save(){
        console.log('save SBI')
    }
    loan(){
        console.log('loan SBI')
    }
}

let Sbi=new Worldbank()
Sbi.loan()
