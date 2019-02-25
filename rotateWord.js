function rotateWord(str){
 if(str.length == 0){
     return 0;
 }

    let arr = str.split('');
    arr.reverse();   //dog pig => gip god
    let cur = "";
    let strs = "";

 for(let i = 0; i < arr.length; i++){
     if(arr[i] == ' '){
         strs = reverses(strs,cur,arr,i);
         cur = "";
     }
     else{
         cur += arr[i];
     }
 }
 strs = reverses(strs,cur,arr,arr.length)
 return strs;
}

function reverses(strs,cur,arr,i){
    let curArr = cur.split('').reverse();
    strs += curArr;
    strs += i == arr.length ? '' : ' '; //是否加空格
    return strs;
}

let str = "123 456";
console.log(rotateWord(str));