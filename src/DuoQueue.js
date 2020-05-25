/* Write your class below */
const Queue = require('./Queue.js')

class DuoQueue {
    constructor(numOfQueues){
        this.queues = {}
        for(let i=0; i<numOfQueues; i++){
            const queueNum = i+1
            this['q'+ queueNum] = new Queue()
            this.queues[queueNum] = this['q'+ queueNum]
        }
        // this.q1 = new Queue()
        // this.q2 = new Queue()
        // this.queues = {
        //     1: this.q1,
        //     2: this.q2
        // }
    }

    enqueue(person, qNum){
        this.queues[qNum].enqueue(person)
    }

    dequeue(qNum){
        this.queues[qNum].dequeue()
    }

    getLongestQueue(){
        if(this.queues[1].queue.length === this.queues[2].queue.length){
            return 'Queues are eqaul!'
        } else 
        return this.queues[1].queue.length > this.queues[2].queue.length ?
        this.queues[1] :  this.queues[2]
    }

    getShortestQueue(){
        if(this.queues[1].queue.length === this.queues[2].queue.length){
            return 'Queues are eqaul!'
        } else 
        return this.queues[1].queue.length > this.queues[2].queue.length ?
        this.queues[2] :  this.queues[1]
    }

    balanceQueues(){
        const longestQ = this.getLongestQueue()
        const shortestQ = this.getShortestQueue()
        while(longestQ.queue.length - shortestQ.queue.length > 1){
            const transfer = longestQ.dequeue()
            shortestQ.enqueue(transfer)
        }
    }
}









//You can paste the test code from the lesson below to test your solution
let dq = new DuoQueue(3)
// console.log(dq.queues[1])
// first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

// //second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

// //balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }

console.log(dq)

/* Do not remove the exports below */
module.exports = DuoQueue