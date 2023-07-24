var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
console.log(fruits)
console.log("all fruits are string : " + fruits.every((val)=>isNaN(val)));
console.log("some of fruits start with a : " + fruits.some((val)=>val[0]=='a'));
let newFruits = fruits.filter((val) => val.startsWith('b') || val.startsWith('s'));
console.log(newFruits);

newFruits = fruits.map((val) => {
    return `I like ${val}`;
})
newFruits.forEach(val => console.log(val));

// task 2


function ownFun(userData = {}){
    let courseData = {
        courseName:"ES6",
        courseDuration:"3days",
        courseOwner:"javaScipt"
    };
    for(let prop in userData)
    {
        try{
            if(!courseData.hasOwnProperty(prop)){
                throw `${prop} is not a valid property`;
            }
        }catch(err){
            alert(err);
            return;
        }
    }
    let confirmedData = Object.assign({},courseData,userData);
    console.log(confirmedData);
}

ownFun({courseName:"meefr"});
ownFun({courseName:"js",courseOwner:"meefr"});
ownFun({courseName:"js",courseOwner:"meefr", date:11});

