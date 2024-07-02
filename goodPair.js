var numIdenticalPairs = function(nums) {
    let goodPair = 0;
    let n=nums.length;
    let freq = Array(101).fill(0)

    for(let i=0;i<n;i++)
    {
        freq[nums[i]]++;
    }

    for(let i=0;i<n;i++)
    {
        let x = freq[nums[i]]
        goodPair = goodPair + (x*(x-1))/2;
        freq[nums[i]] = 0;
    }
    return goodPair
};

const result = numIdenticalPairs([5,5,1,77,96,96,89,80,12,23,1,6,3,66,39,88,48,38,44,32,44,36,60,87,53,77,72,49,13,39,60,60,71,68,80,75,79,38,4,14,59,75,6,91,87,95,25,55,83,18,26,59,53,100,42,96,76,22,21,4,22,46,34,39,98,82,54,73,52,33,47,73,54,23,82,98,13,51,52,1,96,69,76])
console.log(result)