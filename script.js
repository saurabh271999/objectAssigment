// Q1. Create a Function
// Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member
// named name. Your task is to create a method inside this object named setter, such that this method will print the value of the
// data member named as name.

const student1 = {
  name: "saurabh",
  setter() {
    console.log("output 1:-" + this.name);
  },
};
student1.setter();

// Q2. Delete a Parameter
// Complete the function in the editor. You have an object as a parameter. In which you have to delete the rollno property from
// the object and return the object.

const studentdata = {
  name: "saurabh",
  rollno: 25,
};
console.log("output 2:-");
console.log(studentdata);
delete studentdata.rollno;
console.log(studentdata);

// Q3. Check whether the Package is Dream Package or not
// Complete the function in the editor. In which you are given an object as a parameter. In that object, there is one property named as salary
// if the salary is maximum than 5 lakh then return "Dream" otherwise return "NotDream".

const employee = [
  {
    name: "saurabh",
    salary: 1000000,
    city: "Ghazibad",
    education: "MCA",
  },
  {
    name: "paras",
    salary: 500000,
    city: "Ghazibad",
    education: "MCA",
  },
  {
    name: "allu arjun",
    salary: 200000,
    city: "Ghazibad",
    education: "Btech",
  },
  {
    name: "Ambani",
    salary: 2000000,
    city: "Ghazibad",
    education: "Mtech",
  },
];
console.log('output -3:-')
const result = employee.filter((item) => item.salary > 500000);
result.forEach((item) => (item.salary = "Dream"));
console.log(result);

// Q4. Check whether the Object has a parameter or not
// Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" if there is no
// parameter in the object otherwise return "true".

// function check(obj){
//   return Object.keys(obj).length > 0 ? true : false
// }

// console.log(check({name:'saurabh'}))
// console.log(check({}))
// console.log(check({age: 25}))

function check(obj){
 if(Object.keys(obj).length>0){
  return true
 }
 else{
  return false
 }
}
console.log('output 4:-')
console.log(check({name:'saurabh',}))
console.log(check({}))

// Q5. Merge the Objects
// Complete the function in the editor. In which you are given two objects as a parameter.In which you have to merge two
// objects and return a single object.


function addObj(user1, user2){
  return {...user1,...user2}
}
const user1 = {name:'saurabh'}
const user2 = {lastname:'Bhardwaj'}
console.log(addObj(user1, user2))

// Q6. Object Multiplyer
// Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are tw o
// variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.

function multi(n, id, houseno){
  return {
    id: id,
    houseno: houseno,
    product: function(){
      return{
      idproduct: n*id,
      housenoproduct: n*houseno
      }
      
    }

  }
}

const user = multi(2,10,25)
// console.log(user)
const num = user.product()
console.log('output 6th')
console.log(num)

// console.log(num)


// Q7. Find the sum of Object Members
// You are given a function Check which takes an object Obj as a parameter. Your taks is to find out the sum of the three data
// members of the object. The data members are named as p1, p2, p3.
// Note: You have to complete Check function. No need to take any input.


function add(p1,p2,p3){
  return{
    p1:p1,
    p2:p2,
    p3:p3,
    sum:function(){
      return p1 + p2 +p3
    }
  }
}
const value = add(10,20,30)
const total_value = value.sum()
console.log(`output 7th:- ${total_value}`)

// Q8. Check whether the Objects are same or not.
// Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables
// name and id. Your task is to compare the object name and id to the new_name and new_id given there as a parameter.
// Return "true" if new_name and id are same as objects name and id otherwise return "false".


function compare(obj1, obj2) {
  const entries1 = Object.entries(obj1);
  const entries2 = Object.entries(obj2);

  if (entries1.length !== entries2.length) {
    return false;
  }

  for (let [key, value] of entries1) {
    if (obj2[key] !== value) {
      return false;
    }
  }

  return true;
}

console.log(compare({ name: 'saurabh', age: 24 }, { name: 'saurabh', age: 24 })); // ✅ true
console.log(compare({ name: 'saurabh', age: 24 }, { name: 'saurabh', age: 25 })); // ❌ false



