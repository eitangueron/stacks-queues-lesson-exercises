/* Write your class below */
class Queue{
    constructor(){
        this.queue = []
    }

    print(){    
        console.log(this.queue)
    }

    enqueue(x){
        this.queue.unshift(x)            // [...this.queue,x]
    }

    dequeue(){
        const deletedItem = this.queue[0]           //this.queue[this.lengeth -1]  
        this.queue.shift()
        return deletedItem
    }

    isEmpty(){
        return this.queue.length ? false : true
    }

    peek(){
        return this.queue[this.queue.length -1] || null
    }
}







//You can paste the test code from the lesson below to test your solution
// let q = new Queue()
// console.log(q.isEmpty())    //true
// q.print()                   //[]
// q.enqueue(2)
// console.log(q.isEmpty())    //false
// q.enqueue(4)
// q.print()                   //[4,2]
// console.log(q.peek())       //2
// q.dequeue()
// q.dequeue()
// console.log(q.peek())       //null
// console.log(q.isEmpty())    //true
// q.print()


/* Do not remove the exports below */
module.exports = Queue