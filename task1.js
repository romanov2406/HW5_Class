

// imitation class
class CoffeeMake {
    constructor(name) {
        this.name = name
    }

    on() {
        console.log(`Кавоварка ${this.name.toUpperCase()} роботает`);
    } of () {
        console.log(`Кавоварка ${this.name.toUpperCase()} He роботает `);
    }
}
CoffeeMake.prototype.workTime = function(){
    console.log(`work time ${this.name.toUpperCase()} CoffeMachine one year`);
}

// First class
class Drip extends CoffeeMake {
    constructor(name,modell) {
        super(name);
        this.modell = modell
    }
    sayHi() {
        console.log('Hello', this.modell.toUpperCase());
    }
}

// second class
class Carob extends CoffeeMake {
    constructor(name,modell,year) {
        super(name,modell);
        this.year = year
    }
    sayBuy() {
        console.log('Buy', this.name.toUpperCase());
    }
}

// third-class
class CoffeeMachine extends CoffeeMake {
    constructor(name,modell,year) {
        super(name,modell);
        this.year = year
    }
    func() {
        console.log('Hello', this.year);
    }
}


// an instance of the class
let SAMSUNG = new Drip('samsung', 'GT500', "1 years old");
let LG = new Carob('lg', 'G6', '2 years old');
let SIEMENS = new CoffeeMachine('siemens', 'CX65', '15 years old');

//////////////////////////////////
SAMSUNG.of();
SAMSUNG.on();
SAMSUNG.workTime();
SAMSUNG.sayHi();
/////////////////////////////////
LG.of();
LG.on();
LG.workTime();
LG.sayBuy();
/////////////////////////////////
SIEMENS.of();
SIEMENS.on();
SIEMENS.workTime();
SIEMENS.func();

