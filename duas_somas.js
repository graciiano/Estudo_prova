var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; i < nums.length; i++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return [];
};


let resultado = null
const nums = [1, 5, 9, 10, 5]
const target = 10;

for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
        if(nums[i] + nums[j]  === target) {
            resultado = [i, j]
            break;
        }
    }
    if (resultado) break;
}


console.log(resultado)
