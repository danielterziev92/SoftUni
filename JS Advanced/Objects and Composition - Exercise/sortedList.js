function createSortedList() {
    return {
        numbers: [],
        add: function (element) {
            this.numbers = this.numbers.concat(element).sort((a, b) => a - b);
            this.size++;
        },
        remove: function (index) {
            if (index < this.numbers.length && index >= 0) {
                this.numbers.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            return this.numbers[index];
        },
        size: 0,
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(-6);
list.add(-20);
list.add(-65);
list.add(7);
console.log(list.get(1));
list.remove(10);
console.log(list.get(1));
console.log(list)
console.log(list.size)
