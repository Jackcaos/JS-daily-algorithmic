//["1","2","3"] true  ["2","2","3"]

function isUnique(arr){
    if(arr == null){
        return true;
    }

    let newArr = new Array();
    for(let i = 0; i < 128; i++){
        newArr[i] = 0;
    }

    for(let i = 0; i < arr.length; i++){
      if(newArr[arr[i]] == 1){
          return false;
      }
      else{
          newArr[arr[i]] = 1;
      }
    }
    return true;
}


let arr = ["1","2","3"];
console.log(isUnique(arr));