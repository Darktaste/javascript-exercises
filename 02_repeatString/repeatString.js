const repeatString = function(string, num) {

    let i = 0;
    let isFalse = false;

    let result= "";

    if(num < 0) {
        isFalse = true;
        
    }

    while(i < num) {

        if(isFalse){
            break;
        }
        
        result += string;

        i++;
    }

    if(isFalse) {
        return "ERROR";
    } else {
        return result;
    }

};

// Do not edit below this line
module.exports = repeatString;
