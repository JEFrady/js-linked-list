/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;


    const getHead = () => {
        return head;
    };
    
    const getTail = () => {
        return tail;
    };

    const add = (value) => {
        let newNode = {
            value: value,
            next: null
        }
        if (head === null) {
            head = newNode;
            tail = newNode;
            return tail;
        }
        else {
            tail.next = newNode;
            tail = newNode;
            return tail;
        }
    };

    const get = (number) => {
        if (number < 0 || head === null) {
            return false;
        }
        else if (number === 0) {
            return head;
        }
        else {
            let currentNode = head;
            for (let i=0; i<number; i++){
                if (currentNode.next === null) {
                    return false;
                }
                currentNode = currentNode.next;
            }
            return currentNode;
        }               
    };

    const remove = (number) => {
        let nodeToRemove = get(number);
        let previousNode = get(number - 1);
        let nextNode = get(number + 1);
        if (number < 0 || nodeToRemove === false) {
            return false;
        }
        else if (number === 0) {
            head = nextNode;
            nodeToRemove.next = null;

        }
        else {
            if (nodeToRemove.next === null) {
                previousNode.next = null;
                tail = previousNode;
            }
            else {
                previousNode.next = nextNode;
            }
        }
    };

    const insert = (value, number) => {

    };
    
    return {
        getHead,
        getTail,
        add,
        remove,
        get,
        insert
    }
}