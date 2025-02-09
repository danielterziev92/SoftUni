class Stringer {
    constructor(word, length) {
        this.innerString = word;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return '...'
        }

        if (this.innerString.length > this.innerLength) {
            const result = this.innerString.split('')
            result.splice(this.innerLength, this.innerString.length - this.innerLength, '...')
            return result.join('');
        }

        return this.innerString
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test