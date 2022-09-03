function cats(cats) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`
        }
    }

    for (let i = 0; i < cats.length; i++) {
        let catInfo = cats[i].split(' ');
        let catName = catInfo[0];
        let catAge = catInfo[1]
        let myCat = new Cat(catName, catAge);
        console.log(myCat.meow());
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);