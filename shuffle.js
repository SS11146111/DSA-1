var shuffle = function(nums, n) {
    let elements = []
    for(let i=0,j=n; i<n,j<nums.length; i++,j++)
        {
            elements.push(nums[i])
            elements.push(nums[j])
        }

    return elements
};

const result = shuffle([2,5,1,3,6,7],3);
console.log(result)