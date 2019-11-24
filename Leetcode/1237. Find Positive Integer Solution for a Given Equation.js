function findSolution(customfunction, z) {
    var results = [];
    for(var x = 1; x<101; x++){
        for(var y = 1; y<101; y++){
            if(customfunction(x,y) == z){
                results.push([x,y])
            }
        }   
    }
    return results;
};