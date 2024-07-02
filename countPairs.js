var countKDifference = function(nums, k) {
    let frequency = Array(201).fill(0);
    let pairs = 0;
   
    for (let num of nums) {
        if (num - k >=0 ) {
            pairs += frequency[num - k];
        }
        if (num + k <= 200) {
            pairs += frequency[num + k];
        }
        ++frequency[num];
    }

    return pairs;
    
};

//const result = countKDifference([1,3],3)
const result = countKDifference([1,2,2,1],1)
console.log(result)