// str = "1234ABC67" str1 = "AB1234G67"  123467

function lcse(str1,str2){
    let dp = new Array();
    for(let i = 0; i < str1.length; i ++){
        dp[i] = new Array();
        for(let j = 0; j < str2.length; j++){
            dp[i][j] = 0;
        }
    }

    dp[0][0] = str1[0] == str2[0] ? 1 : 0;

    for(let i = 1; i < str1.length; i ++){
        dp[i][0] = Math.max(dp[i-1][0],str1[i] == str2[0] ? 1 : 0);
    }

    for(let j = 1; j < str2.length; j ++){
        dp[0][j] = Math.max(dp[0][j-1],str1[0] == str2[j] ? 1 : 0);
    }

    for(let i = 1; i < str1.length; i++){
        for(let j = 1; j < str2.length; j++){
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
            if(str1[i] == str2[j]){
                dp[i][j] = Math.max(dp[i][j],dp[i-1][j-1] + 1);
            }
        }
    }
    return dp;
}

function getDp(str1,str2){
    if(str1 == "" || str2 =="" || str1 == null || str2 == null){
        return "";
    }

    let dp = lcse(str1,str2);
    let res = "";
    let n = str1.length - 1;
    let m = str2.length - 1;
    let index = dp[n][m];
    while(index > 0){
        if(n > 0 && dp[n][m] == dp[n-1][m]){
            n--;
        }
        else if(m > 0 && dp[n][m] == dp[n][m-1]){
            m--;
        }
        else{
            res += str1[n];
            index--;
            n--;
            m--;
        }
    }
    return res.split('').reverse().join('');
}

let str1 = "1234ABC67",str2 = "AB1234G67";
console.log(getDp(str1,str2));