function replace(str){
    let match = 'red';
    let matchArr = match.split('');
    let max = 0;
    let index = 0;
    let cur = 0;
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++){
            if (strArr[i] == matchArr[index]) {
                index++;
                if (index == matchArr.length) {
                    cover(strArr,matchArr,i);
                    index = 0;
                }
            }
            else {
                if (strArr[i] == matchArr[0]) {
                    i--;
                }
                index = 0;
            }
    }
    for(let i = 0; i < strArr.length; i++){
        if(parseInt(strArr[i]) <= 9 || parseInt(strArr[i]) >= 0){
            let tmp = strArr[i] - '0';
            cur = cur * 10 + tmp;
            max = Math.max(cur,max);
        }
        else {
            if (strArr[i] == ' '){
                continue;
            }
            cur = 0;
        }
    }
    return max;
}

function cover(strArr,matchArr,i){
    let j = matchArr.length;
    while(j > 0){
        j--;
        strArr[i--] = ' ';
    }
}

let str = '12reda1red111';
console.log(replace(str))