const sumAll = function (a, b) {

    let result = 0;
    let isTrue = true;

    if (a < 0 || b < 0 || isNaN(a) || isNaN(b) || a === a.toString() || b === b.toString()) {

        isTrue = false;

    } else if (a <= b) {

        for (let i = a; i <= b; i++) {
            result += i;
        }

    } else if (a > b) {

        for (let i = a; i >= b; i--) {
            result += i;
        }

    }

    if (isTrue) {
        return result;
    } else {
        return "ERROR";
    }


};


sumAll(-10, 4)

// Do not edit below this line
module.exports = sumAll;
