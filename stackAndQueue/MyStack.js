function MyStack(){
    let item = [];
    let minItem = [];
    this.push = function(element){
        item.push(element);
        if(minItem.length == 0 || minItem == null){
            minItem.push(element);
        }
        if(element < minItem[minItem.length - 1]){
            minItem.push(element);
        }
        else{
            minItem.push(minItem[minItem.length - 1]);
        }
    }

    this.pop = function(){
        if(item.length == 0 || item == null){
            return;
        }
        minItem.pop();
        return item.pop();
    }

    this.getMin = function () {
        return minItem[minItem.length - 1];
    }
}

let stack = new MyStack();
stack.push(3);
stack.push(2);
stack.push(3);
console.log(stack.getMin());