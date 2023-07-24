import * as shape from "./script2.js"

let obj = {
    firstName:"Mohamed",
    lastName:"Essam",
    email:"meefr25@gmail.com",
    [Symbol.iterator]:function(){
        let conter = 0;
        let objKey = Object.keys(obj);
        return {
            next: function(){
                if(conter == objKey.length)
                    return {
                        value:undefined,done:true
                    };
                else
                return{
                    value:{key:objKey[conter],value:obj[objKey[conter++]]},done:(conter == objKey.length)
                }
            }
        }
    }
}

let it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

let rect = new shape.rectangle(2,2);
let circle = new shape.circle(2);
let triangle = new shape.triangle(2,2);
let square = new shape.square(2);

rect.toString();
square.toString();
triangle.toString();
circle.toString();