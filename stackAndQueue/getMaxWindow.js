//[4,3,5,4,3,3,6,7]
function getMaxWindow(arr,w){
    if(arr == null || arr.length < w || w < 1){
        return null;
    }
    let next = [];
    let qmax = [];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        while(qmax.length != 0 && arr[i] >= arr[qmax[qmax.length - 1]]){
            qmax.pop();
        }
        qmax.push(i);
        if(qmax[0] == i - w){
            qmax.shift();
        }
        if(i >= w - 1){
            next[index ++] = arr[qmax[0]]
        }
    }
    return next;
}

let arr = [4,3,5,4,3,3,6,7];
console.log(getMaxWindow(arr,3));