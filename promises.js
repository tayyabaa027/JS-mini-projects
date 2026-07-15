

//------------------------------------USING .THEN .CATCH--------------------------------


const p1=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let result=true;
        if(result){
            resolve({username:"tayyaba",age:19,city:"Islamabad"});

        }
        else{
            reject("something went wrong");
        }
    },1000)
})

p1
.then(function(result){
    console.log(result);
    console.log("success");
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{console.log("finally always execute")});




// //------------------------------------USING ASYNC / AWAIT-----------------------------------



const p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let result = true;
        if (!result) {
            resolve({ username: "tayyaba", age: 19, city: "Islamabad" });

        }
        else {
            reject("something went wrong");
        }
    }, 1000)
})

async function consumepromise() {
    try {
        const data = await p2;
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }

}
consumepromise();


//--------------------------FETCH USING .THEN .CATCH-------------------------------------------

fetch("https://api.github.com/users/tayyabaa027")
  .then((response) => {return response.json()})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


//--------------------------FETCH USING .THEN .CATCH-------------------------------------------



async function getUser() {
    try {
        const response = await fetch("https://api.github.com/users/tayyabaa027");
        const data = await response.json();
        if (!response.ok) {
            throw new Error("User not found");
        }
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUser();