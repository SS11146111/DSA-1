var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let greatest;
    let n = candies.length;
   

    for(let i = 0; i < candies.length; i++)
    {
        let flag = false;
        greatest = candies[i] + extraCandies;
     
        for(let j = 0; j < n; j++)
        {  
            if(greatest < candies[j])
            {
                greatest = candies[j]
                flag = true;
            }
           
        }
        
        if(flag == false)
            result.push(true)
        else
            result.push(false)
    }
    return result
};

const result = kidsWithCandies([2,8,7],1)
console.log(result)