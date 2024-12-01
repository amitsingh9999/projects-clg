// sayHello=()=>{
//     console.log("i am in hello world");
// };
// console.log("Task satisfied");
// setTimeout(sayHello,1090);
// // sayhello();
// console.log("Task exit");

console.log("start");
setTimeout(()=> {
    console.log("first task completed");
    setTimeout(()=> {
        console.log("second task completed");
        setTimeout(()=> {
            console.log("third task completed");
        },3000);
    },1000);

},2000);
console.log("end");