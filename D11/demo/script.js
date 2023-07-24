 var str=new String("hello")
//  console.log(str)

 var arr=[1,2,3,4];
//  console.log(arr)
//  var x= arr[Symbol.iterator]()
//  console.log(x)
//  console.log(x.next())
//  console.log(x.next())
//  console.log(x.next())
//  console.log(x.next())
//  console.log(x.next())  
// Primitive data type
// boolean ,Number , Null, string , undefined, Symbol , bigInt

// var myObj={
//     userName:"Ali",
//      age:20,
//      [Symbol.iterator]:function(){
//         var myKeys=Object.keys(myObj);  //[userName,age]
//         console.log(myKeys)
//         var counter=0;
//         var myLength=myKeys.length;  //2

//        //key => mykeys[counter++]
//     //    myObj[userName]
        
//         // console.log(myKeys)
//         return {

//             next: function(){
//                 if(counter==myLength)
//                 return {value:undefined,done:true}
//                 else{
//                     return { value: {key:myKeys[counter],value:myObj[myKeys[counter++]]} ,done:false }
//                 }
           
//             }
//         }
//      }
// };

// var iter=myObj[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())





// console.log( myObj["userName"])


// function fun(){
//     return {nm:"Ahmed",age:30};
// }
// var [x,y]=fun();
// console.log(x)
// console.log(y)
// console.log(z)

// var str= new String("hii")
// var str2= "hii"


// var x=new Symbol("abc")   ///xxxxxx
// var x=5;
// var y=5;
// console.log(x===y)   //true

// var x = Symbol("abc")
// var y = Symbol("abc")
// console.log(x===y)    //false

// var xx = Symbol.for(10);
// var yy = Symbol.for(10);
// console.log(xx ===yy )  //true

class Person{
    static counter=0;
    #personName;
    // const personName; xxxxxxx
    // constructor(){
    //     this.personName="";
    //     this.personAge=0;

    // }
    // constructor(pname){
    //     this.personName=pname;
    //     this.personAge=0;

    // }
    constructor(pname="",page=0){
        if (this.constructor==Person)
        throw "Error!! Abstract Class";
       
        this.#personName=pname;
        this.personAge=page;
        Person.counter++;

    }

    get PersonNameeeee(){
        return this.#personName;
    }

    set PersonNameeeee(val){
        this.#personName=val;
    }
    display () {
        console.log(this.#privateFun())
        return `welcome ${this.#personName} and age ${this.personAge}`
    }
    static fun(){
// counter++;
        return Person.counter;
    }
    #privateFun(){
        return "I am private func"
    }

    toString(){
        return "helllloooo"
        
    }


}

class Employee extends Person{
    constructor(nm="Ali", age=50,sal=1000){
        super(nm,age)
        this.sallary=sal;
        

    }
}

var Emp=new Employee ("Yossef",20,6000)
console.log(Emp)
Emp.personAge=30
Emp.PersonNameeeee="Omar"
console.log(Emp)


// var p1=new Person();
// // console.log(Person.counter)
// var p2=new Person ("Mona")
// var p3=new Person ("Ahmed",30)

// // console.log(p1)
// p1.PersonNameeeee="Ayman"
// // console.log(p1.PersonNameeeee)
// // p1.personName="Omar"
// // p1.#personName="hamada"
// console.log(p3.display())

// // console.log(p1.counter)
// // console.log(Person.counter)
// console.log(Person.fun())
// // // console.log(p1.)
// console.log(p1.toString())













