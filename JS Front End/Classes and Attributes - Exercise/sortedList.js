class List {
    constructor() {
        this._numbers = [];
        this.size = 0;
    }

    get numbers() {
        return this._numbers.sort((a, b) => a - b);
    }

    add(element) {
        this.numbers.push(element);
        this.size += 1;
    }

    remove(index) {
        if (index >= 0 && index < this._numbers.length) {
            this.numbers.splice(index, 1);
            this.size -= 1;
        }
    }

    get(index) {
        if (index >= 0 && index < this._numbers.length) {
            return this.numbers[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.hasOwnProperty('size'))