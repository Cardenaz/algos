

const binarySearch = (nums, target) => {
    let start = 0; 
    let end = nums.length -1; 
    while (start <= end) {
        let mid = Math.floor((start + end) / 2); 
        if(nums[mid] === target){
            return mid; 
        }
        if(nums[mid] < target){
            start = mid + 1; 
        }
        if(nums[mid] > target){
            end = mid - 1; 
        }
     
    }
    return -1; 

}



var testArr = [0,1,2,3,4,5,6,7,8,9]; 

console.log(binarySearch(testArr, 2)); 