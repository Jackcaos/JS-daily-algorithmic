//1,2,3,4,5  4,5,3,2,1true   4,3,5,1,2 false
function isPop(pushV, popV){
    let arr1 = popV.split(',');
    let arr2 = pushV.split(',');
    let arr3 = new Array();
    for(let i = 0; i < arr2.length; i++){
        arr3.push(arr2[i]);
        while(arr1[0] == arr3[arr3.length - 1] && arr3.length != 0){
            arr3.pop();
            arr1.shift();
        }
        console.log(arr3,i)
    }
    if(arr3.length != 0){
        return false;
    }
    return true;
}

let str1 = "1,2,3,4,5";
let str2 = "3,5,4,2,1";
console.log(isPop(str1,str2))