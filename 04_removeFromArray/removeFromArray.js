const removeFromArray = function(...args) {

    const arrayN = args[0];

    let newArrey = [];

    arrayN.forEach((element) => {

        

            if(!args.includes(element)){

                newArrey.push(element)
    
            }
       
        
        
    });

    return newArrey;
}


// Do not edit below this line
module.exports = removeFromArray;
