var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let n = candies.length;
    let max = 0;

    for(let i=0; i<n; i++)
        {
            if(max < candies[i])
                max=candies[i];
        }

    for(let i=0; i<n; i++)
        {
            let sum=candies[i]+extraCandies;
            if(sum>=max)
                result.push(true)
            else
                result.push(false)
        }
 
    return result
};

const result = kidsWithCandies([2,8,7],1)
console.log(result)