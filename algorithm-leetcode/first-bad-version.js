var solution = function(isBadVersion) {


    return function(n){
        var start = 0
        var end = n - 1; 
        
        while (start <= end){
            var mid = Math.floor((start+end)/2); 

            if(isBadVersion(mid)){
                end = mid - 1; 
            }
            else{
                start = mid + 1; 
            }
        }
        return start; 

    }
}




