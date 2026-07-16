function userdata(user,id){
  this.username=user;
  this.Id=id;
//   return this; it implicitly return this
 }

const userone= new userdata("ali",1278);
const usertwo= new userdata("ahmed",1278);

userdata.prototype.greet=function(){
   console.log(this.username);
}
console.log(userone);
console.log(usertwo); 

userone.greet();
usertwo.greet();