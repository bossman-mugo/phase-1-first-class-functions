function receivesAFunction(callBack){
   callBack()
   {
    return "My name is Eric Mugo";
  };
}

function returnsANamedFunction(){
  return function namedFunction(){
    console.log("My name is Eric Mugo");
  }


    };


function returnsAnAnonymousFunction(){

    return function(){console.log("Have a lovely day!")}
}

