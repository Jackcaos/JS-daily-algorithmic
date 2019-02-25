function jump(arr){
    if(arr.length == 0){
        return 0;
    }
    let max = 0;
    let cur = 0;
    let next = 0;
    for(let i = 0; i < arr.length; i++){
        if(cur < i){
            max ++;
            cur = next;
        }
        next = Math.max(next,i + arr[i]);
    }
    return max;
}

let arr = [1,2,3,4,5];
console.log(jump(arr))
