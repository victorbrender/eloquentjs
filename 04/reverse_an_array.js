// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

function reverseArray(array) {
	reversedArray = []
	for (var i = 0; i < array.length; i++)
		reversedArray.unshift(array[i]);
	return reversedArray;
}

function reverseArrayRecursive(array) {
	if (array.length == 1)
		return array;
	else
		return [array[array.length - 1]].concat(reverseArrayInPlace(array.slice(0, array.length - 1)));
}

function reverseArrayInPlace(arrayValue) {
	for (var i = 0; i < Math.floor(arrayValue.length/2); i++) {
		t = arrayValue[i];
		arrayValue[i] = arrayValue[arrayValue.length - 1 - i];
		arrayValue[arrayValue.length - 1 - i] = t;
	}
}

debug(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue)
debug(arrayValue);