/* Write your class below */
class Stack{
    constructor(){
        this.stack = []
        this.length = 0
    }

    print(){
        console.log(this.stack)
    }

    push(x){
        this.stack[this.length] = x
        this.length++
    }

    pop(){
       const deletedItem = this.stack[this.length -1]
       delete this.stack[this.length -1]
       this.length --
       return deletedItem
    }

    peek(){
        return this.stack[this.length -1] || null
    }

    isEmpty(){
        return this.length ? false : true
    }
}











// //You can paste the test code from the lesson below to test your solution
// let myStack = new Stack()
// console.log(myStack.isEmpty())    //true
// myStack.print()                    //[]
// myStack.push(2)      
// console.log(myStack.isEmpty())     //false
// myStack.push(4)      
// myStack.print()                    //[2,4]
// console.log(myStack.peek())        //4
// myStack.pop()
// myStack.pop()
// console.log(myStack.peek())       //null
// console.log(myStack.isEmpty())    //true




/* Do not remove the exports below */
module.exports = Stack