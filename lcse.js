//str1 = "1AB2345CD" str2 = "12345EF"

function lcse(str1,str2){
    let dp = new Array();
    for(let i = 0; i < str1.length; i++){
        dp[i] = new Array();
        for(let j = 0; j < str2.length; j++){
            dp[i][j] = 0;
        }
    }
    for(let i = 0; i < str1.length; i++){
        if(str1[i] == str2[0]){
            dp[i][0] = 1;
        }
    }

    for(let j = 0; j < str2.length; j++){
        if(str1[0] == str2[j]){
            dp[0][j] = 1;
        }
    }

    for(let i = 1; i < str1.length; i++){
        for(let j = 1; j < str2.length; j++){
            if(str1[i] == str2[j]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    return dp;
}

function getDp(str1,str2){
    if(str1 == null || str2 == null || str1 =="" || str2 == ""){
        return "";
    }
    let dp = lcse(str1,str2);
    let max = 0,end = 0;
    for(let i = 0; i < str1.length; i ++){
        for(let j = 0; j < str2.length; j++){
            if(dp[i][j] > max){
                max = dp[i][j];
                end = i;
            }
        }
    }
    let  res = str1.substr(end - max + 1, max);
    return res;
}


let str1 = "1AB2345CD",str2 = "12345EF";
console.log(getDp(str1,str2));