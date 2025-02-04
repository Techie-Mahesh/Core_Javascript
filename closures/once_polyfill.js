function once(fun, context) {
  let ran;
  return function () {
    if (fun) {
      ran = fun.apply(context || this, arguments);
      fun = null;
    }
    return ran;
  };
}

const Hello = once((a, b) => console.log("Hello World", a, b));

Hello(1, 2);
Hello();
Hello();
Hello();
