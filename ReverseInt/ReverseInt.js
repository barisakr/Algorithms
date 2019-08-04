//Description 
//Given an integer, return an integer that is the reverse

//Example 
// ReverseInt(123) === 321
// ReverseInt(510) === 15
// ReverseInt(600) === 6
// ReverseInt(-15) === -51

const Number = 51;

console.log(ReverseInt(Number));

function ReverseInt(n){
   const reversedInt = n.toString().split('').reverse().join('');

   if(n < 0)
        return parseInt(reversedInt) * -1;

    return parseInt(reversedInt); 
}