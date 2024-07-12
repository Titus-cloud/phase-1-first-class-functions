const receivesAFunction = (callback) => {
  callback();
};

const returnsANamedFunction = () => {
  function namedFunction() {
      console.log("This is a named function.");
  }
  return namedFunction;
};

const returnsAnAnonymousFunction = () => {
  return function() {
      console.log("This is an anonymous function.");
  };
};
