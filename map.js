//最长子序列问题  [100,4,200,1,3,2]   [1,2,3,4]为最长连续子序列   返回4

function longestConsecutive(arr){
    if(arr.length == 0){
        return 0;
    }

    let max = 1;
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i],1);
            if(map.has(arr[i] + 1)){
                max = Math.max(max,merge(map,arr[i],arr[i] + 1));
            }
            else if(map.has(arr[i] - 1)){
                max = Math.max(max,merge(map,arr[i] - 1,arr[i]));
            }
        }
    }
    return max;
}

function merge(map, left, right) {
   let l = map.get(left);    //1
   let r = map.get(right);   //1
   let len = r > l ? r + 1 : l + 1;
   map.set(left,len);
   map.set(right,len);
   return len;
}

let arr = [1,2,3,4,6];
console.log(longestConsecutive(arr));