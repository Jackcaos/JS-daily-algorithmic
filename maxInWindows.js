//[1,2,3,4,5] 3
function maxInWindows(num,size){
    if(num.length == 0 || size == 0){
        return;
    }
    let res = [];
    let arr =[];
    for(let i = 0; i < num.length; i++){
        while(num[i] >= num[arr[arr.length - 1]] && arr.length != 0){
            console.log(arr.pop());
        }
        arr.push(i);
        if(i - size == arr[0]){
            arr.shift();
        }
        if(i >= size - 1){
            res.push(num[arr[0]]);
        }
    }
    return res;
}

let num = [2,3,4,2,6,2,5,1];
let size = 3;
console.log(maxInWindows(num,size));