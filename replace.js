//str = 123abc from="abc" to="456"  res="123456"

function replace(str,from,to){
    if(str == null || from == null){
        return str;
    }

    let strArr = str.split('');
    let fromArr = from.split('');

    let match = 0;
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] == fromArr[match]){
            match++;
            if(match == fromArr.length){
                clear(strArr,match,i);
                match = 0;
            }
        }
        else{
            if(strArr[i] == fromArr[0]){
                i--;
            }
            match = 0;
        }
    }

    let res = '';
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] != '0'){
            res = res + strArr[i];
        }
        else if(strArr[i] == '0' && (i == 0 || strArr[i-1] !='0')){
            res = res + to;
        }
    }
    return res;
}

function clear(str,match,i){
    while(match-- != 0){
        str[i] = '0';
        i--;
    }
}

let str="123abc",from = "abc",to = "456";
console.log(replace(str,from,to));