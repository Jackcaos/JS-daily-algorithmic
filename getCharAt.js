// a_1_b_100  输入50输出b

function getCharAt(str,nums){
    if(str == null || str ==""){
        return 0;
    }

    let strArr = str.split('');
    let stage = true;
    let sum = 0;
    let num = 0;
    let res = "";
    for(let i = 0; i < str.length; i++){
        if(strArr[i] ==  "_"){
            stage = !stage;
        }
        else if(stage){
            sum += num;
            if(sum > nums){
                return res;
            }
            num = 0;
            res = strArr[i];
        }
        else{
            num = num * 10 + parseInt(strArr[i]);
        }
    }
    // console.log(num)
    return sum + num > nums ? res : 0;
}

let str = "a_100_b_200";
console.log(getCharAt(str,200));