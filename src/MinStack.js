/* Write your class below */
const Stack = require('./Stack.js')
class MinStack{
    constructor(){
        this.stack = []
        this.length = 0
        this.smallest = new Stack()
    }

    print(){
        console.log(this.stack)
    }

    push(x){
        this.stack[this.length] = x
        if(this.length === 0 ){
            this.smallest.push(x)
        } else {
            if(x < this.smallest.peek()){
                this.smallest.push(x)
            }
        }
        this.length++
    }

    pop(){
       const deletedItem = this.stack[this.length -1]
       delete this.stack[this.length -1]
       this.length --
       if(this.smallest.peek() === deletedItem){
           this.smallest.pop()
       }
       return deletedItem
    }

    peek(){
        return this.stack[this.length -1] || null
    }

    isEmpty(){
        return this.length ? false : true
    }

    getMin(){
        if(this.length !==0){
            return this.smallest.peek()
        } else {
            return null
        }
    }
}







//You can paste the test code from the lesson below to test your solution
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
// ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19



/* Do not remove the exports below */
module.exports = MinStack