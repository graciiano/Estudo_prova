const Node = (data, next = null) => ({ data, next });
const Linkedlist = () => {
    let head = null;
    const add = (data) => {
        const newNode = Node(data);
        if (!head) {
            head = newNode;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    const reverse = () => {
        let prev = null;
        let current =  head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
    
        }
        head = prev;
    }
    
    const getHead = () => head;
    return { add, reverse, getHead}
};

const list = Linkedlist();

list.add(1);
list.add(2);
list.add(3);
list.reverse();
console.log(list.getHead().data)
