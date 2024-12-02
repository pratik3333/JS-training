
let promise1=new Promise((resolve, reject) => {
    
    let success=true;

    if (success) {
        resolve("promise fulfilled");
    } else {

        reject("promise rejected");
    }
})

promise1.then((message)=>
{

    console.log("first message: "+message);
    return "promise fulfilled second message";
}).then((message)=>
{
    console.log("second message: "+message);
    return "promise fulfilled third message"
}).then((message)=>
{
    console.log("third message: "+message);
})

// o/p----
// first message: promise fulfilled
// second message: promise fulfilled second message
// third message: promise fulfilled third message
