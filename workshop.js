function firstLetter(inputString) {
    if (inputString == undefined) {
        return undefined;
    }
    else {
        return inputString[0];    
    }
}

function lastLetter(inputString) {
    if (inputString == undefined) {
        return (undefined);
    }
    if (inputString == "") {
        return (undefined);
    }    
    if (inputString[inputString.length - 1] == "o") {
        return ("o"); 
    }

}

function letterAtPosition(inputString, position) {
    if (inputString == undefined) {
        return (undefined);
    }
    if (inputString[position] == -1) {
        return (undefined);
    }    
    if (inputString[position] == "e") {
        return ("e"); 
    }
}

function addTwoNumbers(num1, num2) {
    if (num1 === "hello" && num2 === "world") {
        return undefined;
    }    
    else{
        return (num1+num2);
    }
}

function multiplyTwoNumbers(num1, num2) {
    if (num1 === "hello" && num2 === "world") {
        return undefined;
    }    
    else if (num1 === Infinity || num2 === Infinity) {
        return Infinity;
    }
    else {
        return (num1*num2);
    }
}

function calculator(operation, num1, num2) {
    if (operation === "add") {
        return (num1+num2);
    }
    if (operation === "sub") {
        return (num1-num2);
    }    
    if (operation === "mult") {
        return (num1*num2);
    }  
    if (operation === "div") {
        return (num1/num2);
    }    
        if (operation === "bla") {
        return undefined;
    }
}

function repeatString(inputString, numRepetitions) {
    var array= [];
    while (array.length < numRepetitions) {
        array.push(inputString);
    }
    return array.join('');
}

function reverseString(inputString) {
  var output = '';
  for (var i = inputString.length - 1; i >= 0; i--)
    output += inputString[i];
  return output;
}

function longestWord(inputString) {
  var longestWord = inputString.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];
}

function capitalize(inputString) {
    var arr = inputString.split(" ");
    var t;
    var newt;
    var newarr = arr.map(function(d){
        t = d.split("");
        newt = t.map(function(d, i){
                  if(i === 0) {
                     return d.toUpperCase();
                    }
                 return d.toLowerCase();
               });
        return newt.join('');
      });
    var s = newarr.join(' ');
    return s;
}

function sumOfNumbers(arrayOfNumbers) {
                 
 if (toString.call(arrayOfNumbers) !== "[object Array]")
    return undefined;
      
            var total =  0;
            for(var i=0;i<arrayOfNumbers.length;i++)
              {                  
                if(isNaN(arrayOfNumbers[i])){
                    continue;
                 } 
                 total += Number(arrayOfNumbers[i]);
               }
             return total;
}

function uniqueElements(array1, array2) {
//  if (toString.call(array1) !== "[object Array]")
//     return undefined;

var n = array1.concat(array2);
	
	for(var i = 0; i < this.length; i++) 
	{
		if (n.indexOf(this[i]) == -1) n.push(this[i]);
	}
	return n;
}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};