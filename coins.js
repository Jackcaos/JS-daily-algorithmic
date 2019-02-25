function coins(arr,aim){
    if(arr == null || aim == 0 || arr.length == 0 || aim < 0){
        return -1;
    }
    let dp = new Array();
    for(let i = 0; i < arr.length; i++){
        dp[i] = new Array();
        for(let j = 0; j <= aim; j++){
            dp[i][j] = 0;
        }
    }
    for(let i = 1 ; i <= aim; i ++){
        dp[0][i] = 99999;
        if(i - arr[0] >= 0 && dp[0][i - arr[0]] != 99999){
             dp[0][i] = dp[0][i - arr[0]] + 1;      //表示用第一种货币组成钱的数量
        }
    }

    let min = 0;
    for(let i = 1; i < arr.length; i++){  //默认0为一张钱
        for(let j = 1; j <= aim; j++){   //之前处理了钱为0的情况
              min = 99999;
              if(j - arr[i] >= 0 && dp[i][aim - j] != 99999){
                  min = dp[i][j - arr[i]] + 1;
              }
              dp[i][j] = Math.min(min,dp[i-1][j]);     //和前一组钱的数量去比较
              console.log(dp)
        }
    }
    return dp[arr.length - 1][aim] != 99999 ? dp[arr.length - 1][aim] : -1;
}

let arr = [2,3,5];
let aim = 15;
console.log(coins(arr,aim));