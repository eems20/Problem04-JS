class DogWalker {
    numberOfWalksCalculator(dogSizes){
        let numberOfWalks = 0;
        //make a hashmap
        let map1 = new Map();
        // loop thru  dogSizes and add elements to hashmap
        for (let i of dogSizes){
            if (map1.has(i)){
                let temp = map1.get(i);
                temp += 1;
                map1.set(i,temp );
            }
            else{
            map1.set(i, 1);
            }
        }
        // getting all the values of the map 
        let get_values = map1.values(); 
        // iterate thru hashmap values and compute if even or odd
        // add to numberofWalks
        for(let elem of get_values) {
            if (elem % 2 === 0){
                numberOfWalks += Math.floor(elem/2) ;
            }
            if (elem % 2 === 1){
               numberOfWalks += Math.floor(elem/2) ;
                numberOfWalks += 1;
            }
        }
     return (numberOfWalks);
    }
}

module.exports = DogWalker;