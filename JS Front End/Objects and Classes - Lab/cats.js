function cats(arrs) {
    const cats = []

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`
        }
    }

    for (let arr of arrs) {
        const [name, age] = [...arr.split(' ')];
        cats.push(new Cat(name, age));
    }

    for (const cat of cats) {
        console.log(cat.meow());
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);