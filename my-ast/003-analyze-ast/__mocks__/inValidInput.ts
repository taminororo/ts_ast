class Animal {
    species: string;

    constructor(species: string) {
        this.species = species;
    }

    showSpecies() {
        console.log(`この動物は ${this.species} です。`);
    }

    eat(food: string) {
        console.log(`${this.species}は${food}を食べています．`);
    }

    sleep(hours: number) {
        console.log(`${this.species}は${hours}時間眠ります．`);
    }

    move(distance: number) {
        console.log(`${this.species}は${distance}メートル移動しました．`);
    }
}

class Dog extends Animal {
    name:string;
    age: number;

    constructor(
        name: string,
        age: number
    ) {
        

        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log(`名前: ${this.name}, 年齢: ${this.age}`);
    }

    bark() {
        console.log(`${this.name} が吠えました: ワンワン！`);
    }
}

const pochi = new Dog('ポチ', 3);

pochi.showSpecies();
pochi.eat('ドッグフード');
pochi.sleep(8);
pochi.move(10);
pochi.showInfo();
pochi.bark();