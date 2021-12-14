class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;
        this.현재노드 = undefined;
        this.데이터수 = 0;
    }
    length() {
        return this.데이터수;
    }
    append(data) {
        let newNode = new Node(data);
        // 마지막 값은 새로운 노드
        this.tail.next = newNode;
        // 마지막 노드는 새로운 노드
        this.tail = newNode;
        this.데이터수 += 1;
    }
    toString() {
        let currentNode = this.head;
        currentNode = currentNode.next;

        let s = [];
        while (currentNode) {
            s.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return `${s.join(' -> ')}`
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.toString();