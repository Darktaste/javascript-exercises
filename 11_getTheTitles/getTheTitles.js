const getTheTitles = function (books) {
    
    return books.map(obj => {
        return obj.title;
    });
};
getTheTitles([]);
// Do not edit below this line
module.exports = getTheTitles;
