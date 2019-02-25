//[1,2,3]
function subset(arr){
    let arr1 = [];
    let arr2 = new Set();
    arr2.add(arr1);
    for(let i = 0; i < arr.length; i++){
        arr2.add(generate(i,arr1,arr))
        arr1.pop();
        arr2.add(generate(i,arr1,arr))
    }
    return arr2;
}

function generate(i,arr1,arr){
    if(i >= arr.length){
        return;
    }
    arr1.push(arr[i]);
    console.log(arr1);4
    return arr1;
}

let arr =[1,2,3];
console.log(subset(arr))