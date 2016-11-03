// Mother-child age difference

// Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

// Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.

var ancestry = require('./ancestry.js').ancestry;

function average(array) {
  function sum(a,b) { return a+b; }
  return array.reduce(sum)/array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function age(person) {
  return person.died - person.born;
}

function has_mother(person) {
  if (byName[person.mother] != null)
    return person;
}

var mother_ages_at_birth = ancestry.filter(has_mother).map(function(person) {
  child = byName[person.name];
  mother = byName[person.mother];

  return child.born - mother.born;
});

// console.log(average(mother_ages_at_birth));

console.log(function() {
  return average(
    ancestry
      .filter(has_mother)
      .map(function(person) {
        child = byName[person.name];
        mother = byName[person.mother];

        return child.born - mother.born;
      })
  );
}());

