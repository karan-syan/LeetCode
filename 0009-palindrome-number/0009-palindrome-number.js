/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x === Number(x.toString().split('').reverse().join(''))){
        return true
    }
    else{
        return false
    }
};