// var twoSum = function(nums, target) {
//     const arr =[];
//     for(let i=0; i<nums.length; i++){
//         console.log(nums[i], "hhh");
//         for(let j = i+1; j< nums.length - i; j++){
//             console.log(nums[i], nums[j]);
//             if(nums[i]+nums[j]==target){
//                 arr.push(i);
//                 arr.push(j)
//             }
//         }

//     }

//     return arr;
// };

// console.log(twoSum([3,2,4], 6));

var twoSum = function (nums, target) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            // console.log(nums[i], nums[j]);
            if(i==j){
                continue
            }
            else if (nums[i] + nums[j] == target) {
                arr.push(i);
                arr.push(j)
            }
        }
    }

    return arr;
};

console.log(twoSum([3,2,3], 6));