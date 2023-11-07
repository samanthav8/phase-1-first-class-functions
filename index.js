function receivesAFunction(callback){
    let random = '2000';
    callback(random);
}


function returnsANamedFunction() {
    return function namedFunction() {
    };
  }

  function returnsAnAnonymousFunction() {
    return function (){
        console.log('Hi');
    }
  }