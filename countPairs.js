var countKDifference = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length; i++)
    {
       for(let j = i+1; j < nums.length; j++)
        {
            val = (nums[i] - nums[j]) >= 0 ? (nums[i] - nums[j]) : (-1)*(nums[i] - nums[j])
            
            if(val == k)
            {
                count++;
            }
        } 
    }
    return count;
};

const result = countKDifference([1,2,2,1],1)
console.log(result)