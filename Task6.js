// quetion one:
// output of console.log (count) after 5 seconds?
// *Error: count is not defined
// *count is declared inside createCounter(), so it is not accessible globally

// Question two:
// *Issue: count is declared using var inside createCounter(), making it a function scoped variable
// *Problem: the setTimeout function tries to access count from the global scope which is does not exist


// we can use closure to keep count inside countCounter()
function countCounter() {
    let count = 0;
    setInterval (() => {
count ++;
console.log (count);
    }, 1000);
    return function () {
        return count;
    };
}

const counter = createCounter ();