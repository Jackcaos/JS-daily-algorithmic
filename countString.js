//aaabbbccc  => a_3_b_3_c_3

function getCountString(str){
    if(str == null || str ==""){
        return 0;
    }

    let strArr = str.split('');
    let num = 1;
    let res = "";
    for(let i = 1; i < strArr.length; i++){
        if(strArr[i] == strArr[i-1]){
            num++;
        }
        else{
            res += link(i - 1,num,strArr);
            num = 1;
        }
        if(i == strArr.length - 1){
            // console.log(i)
            res += strArr[i] + "_" + num;
        }
    }
     return res;
}


function link(i,num,strArr){
        return strArr[i] + "_" + num + "_";
}

let str = "aaabbbccc";
console.log(getCountString(str));