// ==================================
// Question 1
// ==================================
// Output after 5 seconds:
// The code will throw a ReferenceError: count is not defined
// This happens because count is declared inside createCounter function and isn't accessible in the global scope
// ==================================
// Question 2
// ==================================
// JavaScript traps/bugs in the code:
// Variable count is not initialized (it's undefined)
// When undefined is incremented, it becomes NaN
// The count variable is not properly scoped (it's using var)
// There's no way to stop the interval (memory leak)
// The count variable is trying to be accessed from outside its scope

function createCounter() {
    let count = 0;
    
    const intervalId = setInterval(function() {
        count++;
        console.log('Counter:', count);
    }, 1000);
    
    return {
        getCount: function() {
            return count;
        },
        stopCounter: function() {
            clearInterval(intervalId);
        }
    };
}

const counter = createCounter();
setTimeout(function() {
    console.log('After 5 seconds, count is:', counter.getCount());
    counter.stopCounter(); 
}, 5000);
