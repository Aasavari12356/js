//destructured programme
//pgm1
names=['aasavari','era','shravan']

let n1= names[0]
let n2= names[1]
let n3= names[2]

console.log(n1)
console.log(n2)
console.log(n3)

//pgm2
nameA=['anjali','sapana','sharya']
let [s1,s2,s3]= nameA
console.log(s1)
console.log(s2)
console.log(s3)


//pgm3

fruits=['apple','mango','peer','chikoo']
let [f1,f2,f3,f4]=fruits
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)

//pgm4
city=[
    ['mumbai','nagpur'],
    ['ghatkopar','pawoi'],
    ['nashik','pune']

]

let [[c11,c12],[c21,c22],[c31,c32]]=city
console.log(c11)
console.log(c12)
console.log(c21)
console.log(c22)
console.log(c31)
console.log(c32)

//pgm5
info={
    firstname:'aasavari',
    lastname:'bedade'
   
}

let {firstname:fn,lastname:ln}=info

console.log(fn)
console.log(ln)

//pgm6
information={
    'firstname':'sawari',
    'lastname':'bedade',
    parent:{
        'father':'nivrutti',
        'mother' :'sarla'

    }
}
let {firstname:fn1,lastname:ln1,parent:{father:fr,mother:mr}}=information 



console.log(fn1)
console.log(ln1)
console.log(fr)
console.log(mr)

//pgm7
student=[
    {
        'firstname':'aasavari',
        'lastname':'bedade'

    },
    {
        'firstname1':'sawri',
        'lastname1':'avhad'
    }
]

let[{firstname:fn11,lastname:ln12},{firstname1:fn21,lastname1:ln22}] = student
console.log(fn11)
console.log(ln12)
console.log(fn21)
console.log(ln22)

//pgm8
info2={
    fullname:'aasavaribedade',
    address:'ghatkopar',
    skills:['python','js']
}

let {fullname:fn3,address:ad2,skills:[h1,h2]}=info2

console.log(fn3)
console.log(ad2)
console.log(h1)
console.log(h2)