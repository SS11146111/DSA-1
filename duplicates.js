var findIntersectionValues = function(nums1, nums2) {
let leftArr = [];
let rightArr  = [];
let left = 0, right = 0;

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
        left = left + rightArr[i];
}


for(const i of nums2)
{
    if(leftArr[i] != undefined)
        right = right + leftArr[i];
      
}

return [left,right]

}


const result = findIntersectionValues([3,4,2,3],[1,5]);
console.log(result)
