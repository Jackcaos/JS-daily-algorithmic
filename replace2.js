function replace(str) {
    if(str.length == 0){
        return -1;
    }

    let arr = str.split('');
    let len = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == ' '){
            len++;
        }
    }
    let length = arr.length + len * 2 - 1;
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] != ' '){
             arr[length --] = arr[i];
        }
        else{
            arr[length --] = '0';
            arr[length --] = '2';
            arr[length --] = '%';
        }
    }
    return arr.join('');
}


let arr = 'a b  c';
console.log(replace(arr))