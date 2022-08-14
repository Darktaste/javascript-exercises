const palindromes = function (string) {
    let newString = "";
    let lowString = string.toLowerCase();
    let replString = lowString.replace(/[^a-z0-9]/gi, "");
    
    for(let i = replString.length - 1; i >= 0; i--) {
        newString += replString[i];
    }

    if(replString === newString) {
        return true;
    } else {
        return false;
    }
};
palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;
