//Javascript callback another example
function displayresult(some)
{
    console.log(some);
}
function calculate(x,y,mycallback)
{
    let sum=x+y;
    mycallback(sum);
}
calculate(5,10,displayresult);

/* What is difference between the callback and delegate
 Callbacks are similar in function to the delegate pattern. 
 They do the same thing: letting other objects know when something happened, 
 and passing data around. What differentiates them from the delegate pattern, 
 is that instead of passing a reference to yourself, you are passing a function.
 */