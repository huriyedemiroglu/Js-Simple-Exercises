
//// How to get array of names from given array of users according to the following conditions:
  // -Get back only active users
  // -Sort users by age descending 


const users =[
  {id:1,name:"Al",isActive: true, age:20},
  {id:2,name:"Arif",isActive: true, age:18},
  {id:3,name:"Al Arif",isActive: false, age:30}

]
// let newUsers = users.filter((user)=>user.isActive==true).sort((a,b)=>b.age-a.age)
// console.log(newUsers)

const names = users.sort((user1,user2) => (user1.age<user2.age ? 1 : -1))
             .filter((user)=>user.isActive)
             .map((user)=>user.name);

console.log(names);