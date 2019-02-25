// a = "abcd" b = "dabc" true

function isRotation(str,str1){
    if(str.length != str1.length){
        return 0;
    }
   let strs = str1 + str1;
   return strs.indexOf(str);
}

let str = "abcd";
let str1 = "dabc";
console.log(isRotation(str,str1));