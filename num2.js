function num2(str){
    if(str == null || str ==""){
        return 0;
    }
    let strArr = str.split('');
    let cur = strArr[strArr.length - 1] == '0' ? 0 : 1;
    let next = 1;
    let tmp = 0;
    for(let i = strArr.length - 2; i >= 0; i--){
        if(strArr[i] == '0'){
            next = cur;
            cur = 0;
        }
        else{
            tmp = cur;
            if((strArr[i] - '0' * 10 + strArr[i+1] - '0' < 27)){
                cur += next;
            }
            next = tmp;
        }
    }
    return cur;
}

let str = "0001";
console.log(num2(str));