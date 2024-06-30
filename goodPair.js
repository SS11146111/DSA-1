var numIdenticalPairs = function(nums) {
    let goodPair = 0;
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i] == nums[j])
             goodPair++;
        }
    }
    return goodPair
};

const result = numIdenticalPairs([1,2,3])
console.log(result)