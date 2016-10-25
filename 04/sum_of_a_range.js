// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start, end, step) {
  var result = [];
  
  if (start < end) {
      var calculated_step = step || 1;
      for (var i = start; i <= end; i += calculated_step) {
        result.push(i);
      }
    }
  else {
    var calculated_step = step || -1;
    for (var i = start; i >= end; i += calculated_step) {
      result.push(i);
    }
  }

  return result;
}

function sum(range) {
  var sum = 0;
  for (var i = 0; i < range.length; i++) {
    sum += range[i];
  }
  return sum;
}

debug(sum(range(1,10)));
debug(sum(range(1, 10, 2)));
debug(range(1,10));
debug(range(5,2));