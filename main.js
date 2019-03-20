// TEMPERATURE COVERTER
// var cel=document.getElementById('celsius')
//        var far=document.getElementById('fahrenheit')

//        function c2f(){
//            far.value=(1.0*cel.value)+32
//            alert(cel.value+ 'Celsius is equal to'+far.value+ 'farenheit')
//        }


// Question1
//  The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
//  You are given a variable Celsius representing a temperature in Celsius. Use the variable Fahrenheit
//  already defined and assign it the Fahrenheit temperature equivalent to the given Celsius
//  temperature. Use the algorithm mentioned above to help convert the Celsius temperature to
// Fahrenheit.

function convertToF(celcius){
  
  let fahrenheit = celcius * 9/5 + 32;
  
  return fahrenheit;
}
alert("The conversion of 23 degrees celsius to fahrenheight is equal to "+ "" + convertToF(23));



// Question 2
// Reverse the provided string. You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
  
  var splitString = str.split(""); 
 var reverseArray = splitString.reverse(); 
 var joinArray = reverseArray.join(""); 
 
  
  
  return joinArray; 
}

alert("The reverse of Greetings:Emmanuel is"+  reverseString("Greetings:Emmanuel"));


// Question 3
// Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial
// is the product of all positive integers less than or equal to n. Factorials are often represented with
// the shorthand notation n! For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

//When you factorialize a number, you are multiplying that number by each consecutive number minus one.


function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
alert(factorialize(5));




// Question 4
// Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
alert(findLongestWord("The tunga ladies are the most talented software developers alive"));



// Question5
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the
// provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with
// array syntax arr[i].

function largestOfFour(mainArray) {
    return mainArray.map(function(subArray) { 
    return Math.max.apply(null, subArray);
  });
}

alert(largestOfFour([[4, 8, 1, 6], [54, 27, 12, 0], [45, 24, 37, 33], [1000, 10001, 457, 2005]]));

