//JS用set求差集
function diff(set1,set2){
    let diffSet = new Set();

    let otherValues = set2.values();
    for(let item of otherValues){
        if(!set1.has(item)){
            diffSet.add(item);
        }
    }
    return diffSet;
}

// Js用set求交集
function intersection(set1,set2){
    let unionSet = new Set();

    let otherValues = set2.values()
    for(let item of otherValues){
        if(set1.has(item)){
            unionSet.add(item)
        }
    }

    return unionSet;
}


//Js用set求并集
function set(set1, set2){
   let unionSet = new Set();
   let values = set1.values();
   for(let item of values){
       unionSet.add(item);
   }

   let otherValues = set2.values();
   for(let item of otherValues){
       unionSet.add(item);
   }

   return unionSet;
}

//Js用set求set2是否是set1子集
function subset(set1,set2){
    if(set1.size() < set2.size()){
        return false;
    }
    let otherValues = set2.values();
    for(let item of otherValues){
        if(!set1.has(item)){
            return false;
        }
    }
    return true;
}

let set1 = new Set();
let set2 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set2.add(3);
set2.add(4);
set2.add(5);
// console.log(set(set1,set2))
// console.log(intersection(set1,set2))
// console.log(diff(set1,set2))
console.log(subset(set1,set2));