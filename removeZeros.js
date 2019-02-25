// str = "A000B00"  k = 2

function removeZeros(strs,n){
    let str = strs.split('');
    let num = 0, start = -1;
    for (let i = 0; i < str.length; i++){
        if(str[i] == '0'){
            num ++;
            start = start == -1 ? i : start;
        }
        else{
            if(num == n){
                while (n--){
                    str[start++] = '';
                }
                num = 0;
                start = -1;
            }
        }
    }
    if(num == n){
        while(n--){
            str[start++] = '';
        }
    }
    return str.join('');
}

let strs = "A000B00";
console.log(removeZeros(strs,3));