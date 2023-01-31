function receivesAFunction (myFunction) {
return myFunction();
}


function returnsANamedFunction ( ) {
    return function myFunction() {   
        return myFunction("hello")
};
}

function returnsAnAnonymousFunction ( ) {
    return function () {}}
// function returnsAnAnonymousFunction;
