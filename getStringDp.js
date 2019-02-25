function getStringDp(str){
    let dp = new Array()
    for(let i = 0; i < str.length; i++){
         dp[i] = new Array();
        for(let j = 0; j < str.length; j++){
          dp[i][j] = null;
        }
    }
    for(let j = 1; j < str.length;j++){
        dp[j-1][j] = str[j-1] == str[j] ? 0 : 1;
        for(let i = j - 2; i > -1; i--){
            if(str[i] == str[j]){
                console.log(i,j)
                dp[i][j] = dp[i+1][j-1]
            }
            else{
                dp[i][j] = Math.min(dp[i+1][j],dp[i][j-1])+1
            }
        }
    }
    return dp;
}

let str = "baaab";
console.log(getStringDp(str))