// When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

// Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

var ancestry = require('./ancestry.js').ancestry;

function average(array) {
  function sum(a,b) { return a+b; }
  return array.reduce(sum)/array.length;
}

agesPerCentury = {};

ancestry.forEach(function(person) {
  function livedInCentury(person) { return Math.ceil(person.died / 100); }
  function age(person) { return person.died - person.born; }
  var century = livedInCentury(person);

  if (agesPerCentury[century] != null)
    agesPerCentury[century].push(age(person));
  else
    agesPerCentury[century] = [age(person)];
});

for (var century in agesPerCentury) {
  console.log(century, ':', average(agesPerCentury[century]));
}

