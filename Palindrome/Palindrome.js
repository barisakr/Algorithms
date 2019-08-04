

// Example :
// palindrome("abba") === true
// palindrome("baris") === false
// palindrome("aka") === true

var str = "abba";

console.log(palindrome(str));


//1st Solution
function palindrome(str){
    const reversed = str.split('').reverse().join('');

    return str === reversed; // this line returns true if str equals to reversed
}
