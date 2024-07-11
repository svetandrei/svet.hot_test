function fun(a, b, c) {
  return ((a += b) && a < c) ? fun(a, b, c) : (a === c) ? 'Yes = ' + a : 'No';
}
console.log(fun(5, 7, 25));
