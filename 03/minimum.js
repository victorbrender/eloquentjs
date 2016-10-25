// Minimum
// The previous chapter introduced the standard function Math.min that
// returns its smallest argument. We can do that ourselves now. Write a 
// function min that takes two arguments and returns their minimum.

function minimum(firstArg, secondArg) {
  if (firstArg < secondArg)
    return firstArg;
  else
    return secondArg;
}

console.log(minimum(0, 10));
console.log(minimum(0, -10));
console.log(minimum(-10, -10));
