const reverseString = function(string) {
    let reversedString = ''
    for (let i = 0; i< string.length; i++){
        let lastLetter = string.slice(i,i+1)
        //positioning each lastLetter of original string to new reversedString.
        reversedString = [lastLetter, reversedString].join('');
         
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
