var str = "ThisStringGoingToBeReversed";


var reversedStr = ThirdReverse(str); //Change which solution suits you!
console.log(str);
console.log(reversedStr);


//This is the First Solution
function reverse(str){
  return  str.split('').reverse().join('');
}

//This is the second Solution
function SecondReverse(str){
    let reversed = '';

    for (let character of str){
        console.log(character.ToString());
        reversed =character +reversed;
    }
    return reversed;
}

//This is Last Solution 
 //Reduce take two arguaments
    // First one is an arrow function
    // Second argument is a starting initial value for our function, ////// which is passed an empty string
function ThirdReverse(str){
    debugger;
    return str.split('').reduce((reversed, character) => {
            return  character + reversed;
    },'');
}