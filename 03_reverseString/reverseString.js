const reverseString = function(string) {
    
    let lengthOfString = string.length;
    let output = "";

    for(let i = lengthOfString-1; i >= 0; i--) {
        output += string[i];
    }

    return output;

};

// Do not edit below this line
module.exports = reverseString;
