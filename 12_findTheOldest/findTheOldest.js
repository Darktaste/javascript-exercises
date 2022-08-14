const findTheOldest = function(people) {
    return people.reduce((a ,b) => {

        if(!a.yearOfDeath){
            a.yearOfDeath = (new Date()).getFullYear();
        } else if(!b.yearOfDeath) {
            b.yearOfDeath = (new Date()).getFullYear();
        }
    
        if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return a;
        } else if ((b.yearOfDeath - b.yearOfBirth) > (a.yearOfDeath - a.yearOfBirth)) {
            return b;
        }


    });
};

// Do not edit below this line
module.exports = findTheOldest;
