//1. const myPromise = new Promise((resolve, reject) =>{
//     let success = true;
//     if(success){
//         resolve("Data Send Sucessfully");
//     }
//     else{
//         reject("Data failed to send");
//     }
// });
// myPromise.then((message)=> {
//     console.log("Data Resolved"+message);
// })
// .catch((err)=>{
//     console.log("failed to data fetch");
// });

//2. const myPromise = new Promise((resolve, reject) =>{
//     let success = true;
//     console.log("fetching data");
//     setTimeout(() => {
//     if(success){
//         resolve("Data Send Sucessfully");
//     }
//     else{
//         reject("Data failed to send");
//     }
// })},1000);
// myPromise.then((message)=> {
//     console.log("Data Resolved"+message);
// })
// .catch((err)=>{
//     console.log("failed to data fetch");
// });

function task(message,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("First task completed",1080)
    .then(()=>task("Second task completed",2000))
    .then(()=>task("third task completed",3000))
    .then(()=>task("4th task is completed",400));