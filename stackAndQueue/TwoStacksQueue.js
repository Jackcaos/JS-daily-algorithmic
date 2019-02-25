//两个栈实现一个队列
function twoStacksQueue(){
    let oneStack = [];
    let twoStack = [];

    this.enqueue = function(element){   //类似于push
        oneStack.push(element)
        twoStack.push(oneStack[oneStack.length - 1])
    }

    this.dequeue = function(){    //类似于pop
        return twoStack.shift();
    }

    this.front = function(){      //类似于peek
        return twoStack[0];
    }
}

let stack = new twoStacksQueue();
stack.enqueue(1);
stack.enqueue(2);
console.log(stack.dequeue());
console.log(stack.front());

