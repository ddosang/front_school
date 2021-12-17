// 3. 정렬
// 3.1 선택정렬
// 직접 해보기
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [];

let 전 = [199, 22, 33, 32, 64, 72, 222, 233];
let 후 = [12];

let 전 = [199, 33, 32, 64, 72, 222, 233];
let 후 = [12, 22];

let 전 = [199, 33, 64, 72, 222, 233];
let 후 = [12, 22, 32];
//
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];

let 길이 = 입력값.length;

// 주의해야 할 사항 : pop을 하면 length가 줄어듭니다!
// for (let i = 0; i < 입력값.length; i++) {
//     console.log(입력값.pop())    
//     console.log(i)
// }

for (let i = 0; i < 길이; i++) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값), 1)
}

console.log(정렬된배열);


///////

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];

let 길이 = 입력값.length;


while(!!입력값.toString()){
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값), 1)
}

console.log(정렬된배열);


// 3.1 선택정렬(메서드 최소화)
// 제대로 하려면(자리 바꾸는 것까지)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }
        }
        // 자리바꿈
        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(selectionSort(arr));
// [12, 22, 32, 33, 64, 72, 199, 222, 233]

// 3.2 삽입정렬(자기가 들어갈 위치를 찾아감!, O(n**2))
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [];

let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [199];

let 전 = [33, 12, 32, 64, 72, 222, 233];
let 후 = [22, 199];

let 전 = [12, 32, 64, 72, 222, 233];
let 후 = [22, 33, 199];

let 전 = [32, 64, 72, 222, 233];
let 후 = [12, 22, 33, 199];


let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이들어갈인덱스(정렬된배열, 삽입값){
    for (const i in 정렬된배열) {
        if (삽입값 < 정렬된배열[i]) {
            return i
        }
    }
    return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
    let 삽입값 = 입력값.shift()
    let 인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
    정렬된배열.splice(인덱스, 0, 삽입값);
    console.log(`인덱스 : ${인덱스}\n삽입값 : ${삽입값}\n 정렬된배열 : ${정렬된배열}\n`)
}


// 좀 더 어렵게
function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let value = arr.shift();
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));


// 3.3 병합정렬(Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일 할 수 있음)
// let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
// let 정렬된배열 = [];

// 분할(이해를 돕기 위해 8개로 조정)
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]

//정복(0번째끼리 비교!)
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]

// step 1
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length;
    let 결과값 = [];

    if (입력배열의길이 <= 1){
        return 입력배열
    }
    let 중간값 = parseInt(입력배열의길이 / 2);
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))

    while (그룹하나.length != 0 && 그룹둘.length != 0) {
        if(그룹하나[0] < 그룹둘[0]) {
            결과값.push(그룹하나.shift());
        } else {
            결과값.push(그룹둘.shift());
        }
    }
    while (그룹하나.length != 0) {
        결과값.push(그룹하나.shift());
    }
    while (그룹둘.length != 0) {
        결과값.push(그룹둘.shift());
    }
    return 결과값
}

console.log(병합정렬(입력값));

// 3.4 퀵정렬(best - O(nlog2n), worst - O(n**2))
// 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
// 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.
let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

//피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

//피봇값 : 54(66과 77은 값이 한 개이기 때문에 더이상 재귀로 호출되지 않음.)
[32, 10, 5, 11, 15], [54] + [66] + [77]

//피봇값 : 32
[10, 5, 11, 15], [32] + [54] + [66] + [77]

//피봇값 : 10 
[5] + [10], [11, 15] + [32] + [54] + [66] + [77]

//피봇값 : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]


let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];
function 퀵정렬(입력배열){
    let 입력배열의길이 = 입력배열.length;

    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    const 피벗값 = [입력배열.shift()]; //기준점
    const 그룹하나 = [];
    const 그룹둘 = [];

    for (let i in 입력배열) {
        if (입력배열[i] < 피벗값) {
            그룹하나.push(입력배열[i]);
        } else {
            그룹둘.push(입력배열[i]);
        }
    }

    console.log(`그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n피벗값 : ${피벗값}\n`);

    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));

}

console.log(퀵정렬(입력값));


// 4. 페이지 교체 알고리즘




// 5. 트리와 그래프

const tree = {
    root: {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 1,
                left : null,
                right: null
            },
            right : {
                value: 4,
                left : null,
                right: null
            }
        },
        right: {
            value: 8,
            left: {
                value: 6,
                left : null,
                right: null
            },
            right : {
                value: 9,
                left : null,
                right: null
            }
        }
    }
}

tree.root.value //5
tree.root.left.value //3
tree.root.right.right.value //9


////
// 6. 트리의 순회

class Node {
    constructor(data){
        this.data = data;
        // this.child = []; // 2진트리가 아닌 트리가 됨
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data);
        this.root = init;
        this.데이터수 = 0;
    }

    length(){
        return this.데이터수;
    }

    insert(data){
        let 새로운노드 = new Node(data);
        let 순회용현재노드 = this.root;

        while(순회용현재노드){
            if (data === 순회용현재노드.data){
                // 중복된 값은 탈락!
                return;
            }
            if (data < 순회용현재노드.data){
                // 들어온 데이터가 작으면 왼쪽에
                // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
                if (!순회용현재노드.left){
                    순회용현재노드.left = 새로운노드;
                    return;
                }
                순회용현재노드 = 순회용현재노드.left;
            }
            if (data > 순회용현재노드.data){
                // 들어온 데이터가 크면 오른쪽에
                // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
                if (!순회용현재노드.right){
                    순회용현재노드.right = 새로운노드;
                    return;
                }
                순회용현재노드 = 순회용현재노드.right;
            }
        }
        
        this.데이터수 += 1;
    }

    // BFS는 스택을 큐로만 바꾸어주면 된다.
    // .pop() 대신 .shift()
    DFS(){
        // 깊이우선탐색, DFS(Depth First Search)
        // Stack 이용!
        let 결과값 = [];
        let 스택 = [this.root];
        
        while(스택.length !== 0){
            let current = 스택.pop();
            if (current.right) {
                스택.push(current.right);
            }
            if (current.left) {
                스택.push(current.left);
            }
            결과값.push(current.data);
        }
        return 결과값;
    }

    BFS(){
        // 너비우선탐색, DFS(Breadth First Search)
        // Queue 이용!
    }
}

let t = new Tree(5); // root노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);


// 6. 트리의 순회
class Node {
    constructor(data){
        this.data = data;
        // this.child = []; // 2진트리가 아닌 트리가 됨
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data);
        this.root = init;
        this.데이터수 = 0;
    }

    length(){
        return this.데이터수;
    }

    insert(data){
        let 새로운노드 = new Node(data);
        let 순회용현재노드 = this.root;

        while(순회용현재노드){
            if (data === 순회용현재노드.data){
                // 중복된 값은 탈락!
                return;
            }
            if (data < 순회용현재노드.data){
                // 들어온 데이터가 작으면 왼쪽에
                // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
                if (!순회용현재노드.left){
                    순회용현재노드.left = 새로운노드;
                    return;
                }
                순회용현재노드 = 순회용현재노드.left;
            }
            if (data > 순회용현재노드.data){
                // 들어온 데이터가 크면 오른쪽에
                // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
                if (!순회용현재노드.right){
                    순회용현재노드.right = 새로운노드;
                    return;
                }
                순회용현재노드 = 순회용현재노드.right;
            }
        }
        
        this.데이터수 += 1;
    }

    // 깊스너큐, 파선아실
    // 갈메기털빼
    DFS(){
        // 깊이우선탐색, DFS(Depth First Search)
        // Stack 이용!
        let 결과값 = [];
        let 스택 = [this.root];
        
        while(스택.length !== 0){
            let current = 스택.pop();
            if (current.right) {
                스택.push(current.right);
            }
            if (current.left) {
                스택.push(current.left);
            }
            결과값.push(current.data);
        }
        return 결과값;
    }

    BFS(){
        // 너비우선탐색, DFS(Breadth First Search)
        // Queue 이용!
        let 결과값 = [];
        let 큐 = [this.root];

        while (큐.length !== 0) {
            let current = 큐.shift();
            if (current.left) {
                큐.push(current.left)
            } 
            if (current.right) {
                큐.push(current.right)
            }
            결과값.push(current.data)
        }
        return 결과값
    }
}

let t = new Tree(5); // root노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);


t.root.data
5
t.root.left.data
3
t.root.right.right.data
9
t.root.right.left.data
6