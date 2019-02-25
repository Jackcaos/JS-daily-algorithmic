function maxRecSize(arr){
    if(arr.length == 0 || arr == null){
        return 0;
    }
    let height = [];
    for(let i = 0; i < arr[0].length; i++){
        height[i] = 0;
    }
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            height[j] = arr[i][j] == 0 ? 0 : height[j] + 1;
        }
        max = Math.max(max,MaxRecFromBottom(height));    //将当前行所以height的高度传递过去
    }
    return max;
}

function MaxRecFromBottom(height){
    if(height == null || height.length == 0){
        return 0;
    }
    let maxArea = 0;
    let stack = [];
    for(let i = 0; i < height.length; i++){
        while(stack.length != 0 && height[i] <= height[stack[stack.length - 1]]){
            //弹出栈操作
            let x = stack.pop();
            let k = stack.length == 0 ? -1 : stack[stack.length - 1];
            let area = (i - k - 1) * height[x];
            Math.max(maxArea,area);
        }
        stack.push(i);       //若当前坐标的元素满足height[i]大于栈顶元素
    }
    while(stack.length != 0){
        let x = stack.pop();
        let k = stack.length == 0 ? -1 : stack[stack.length - 1];
        let area = (height.length - 1 - k) * height[x];   //当i == height.length时，其值极小，所以之前的所有的值全部弹出
        maxArea = Math.max(maxArea,area);
    }
    return maxArea;
}

let arr = [[1,0,1,1],[1,0,1,1],[1,1,1,1]];
console.log(maxRecSize(arr))