// arr[2,1,5,3,6,4,8,9,7]   [1,3,4,8,9]
function getDp(arr){
   let dp = new Array();
   for(let i = 0; i < arr.length; i++){
       dp[i] = 1;
       for(let j = 0; j < i; j++){
           if(arr[j] < arr[i]){
               dp[i] = Math.max(dp[i],dp[j] + 1);
           }
       }
   }
   return dp;
}
// dp = [1, 1, 2, 2, 3, 3, 4, 5, 4]
// 1 3 4 8 9

function generateLIS(arr){
    let dp = getDp(arr);
    let res = new Array();
    let max = dp[0];
    let end = 0;
    for(let i = 1; i < dp.length; i++){
        if(dp[i] > dp[i-1]){
            max = dp[i];
            end = i;
        }
    }
    res.push(arr[end]);
    for(let i = end ; i >= 0; i--){
        if((dp[i] == dp[end]-1) && arr[i] < arr[end]){
            res.push(arr[i]);
            end = i;
        }
    }
    return res.reverse();
}

let arr = [2,1,5,3,6,4,8,9,7];
console.log(generateLIS(arr));