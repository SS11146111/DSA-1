var findIntersectionValues = function(nums1, nums2) {
    let leftArr = [];
    let rightArr  = [];
    let answer1 = 0, answer2 = 0;

    for(const i of nums1)
    {
        leftArr[i] = 1;
    
    }

    for(const i of nums2)
    {
        rightArr[i] = 1;
        
    }


    for(const i of nums1)
    {
        if(rightArr[i] != undefined)
            answer1 = answer1 + rightArr[i];
    }


    for(const i of nums2)
    {
        if(leftArr[i] != undefined)
            answer2 = answer2 + leftArr[i];
        
    }

    return [answer1,answer2]

};

const result = findIntersectionValues([3,4,2,3],[1,5]);
console.log(result)
