let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved");
    },2000);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise next step resolved");
    },1500);
});

async function asyncFunc(){
    try{
        let result1 = await promise1;
        let result2 = await promise2;

        console.log("Async-await");
        console.log(result1);
        console.log(result2);
    }
    catch(error){
        console.log(error);
    }
}
asyncFunc();
console.log("Hi Hello !!!");