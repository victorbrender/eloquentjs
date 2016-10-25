// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// first solution
var line = '';

for (var i = 0; i < 7; i++) {
  line += '#';
  console.log(line);
}

//second solution
var line2 = '';

while (line2.length < 7) {
  line2 += '*';
  console.log(line2);
}