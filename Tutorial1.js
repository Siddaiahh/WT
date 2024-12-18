/* What is Call back function
A callback is a function passed as an argument to another function.

*/
//callback function - Anonymous Function
const message=function(){
    console.log("Hi I am Bhanudas Satam");
    
}
setTimeout(message,3000);
//callback back as an Arrow function

setTimeout(()=>{
    console.log("Calling from arrow funciton");
},3000);
