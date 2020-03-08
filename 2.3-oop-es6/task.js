//Задача 1

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.durabilityInit = durability; //первоначальное значение durability
    }

    takeDamage(damage) {
        this.durability =  this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability === 0) {
            return 0;
        }
        let percentDur = this.durability / this.durabilityInit * 100;
        if (percentDur > 30) {
            return this.attack;
        } else {
            return this.attack / 2;
        }

    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}


const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const bowBig = new Weapon('Длинный лук', 15, 200, 4);
const poleax = new Weapon('Секира', 27, 800, 1);
const staffBig = new Weapon('Посох Бури', 10, 300, 3);


sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(600);
console.log(sword.durability);

arm.takeDamage(20);
console.log(arm.durability);

bow.takeDamage(20);
console.log(bow.durability);

bow.takeDamage(200);
console.log(bow.durability);

console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability);
console.log(bow.getDamage());

console.log(bow.durability);
console.log(bow.isBroken());

console.log(arm.durability);
console.log(bow.isBroken());

//задача 2
class Arm extends Weapon {
    constructor(name, attack, durability, range) {
        super('Рука', 1, Infinity, 1);
    } 

}

class Bow extends Weapon {
    constructor(name, attack, durability, range) {
        super('Лук', 10,  200, 3);
    } 

}

class Sword extends Weapon {
    constructor(name, attack, durability, range) {
        super('Меч', 25, 500, 1);
    } 

}

class Knife extends Weapon {
    constructor(name, attack, durability, range) {
        super('Нож', 5, 300, 1);
    } 

}

class Staff extends Weapon {
    constructor(name, attack, durability, range) {
        super('Посох', 8, 300, 2);
    } 

}

class BowBig extends Bow {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range =  4;
    } 

}

class Poleax extends Sword {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
        this.name = 'Секира';
        this.attack = 27;
        this.durability =  800;
        this.durabilityInit =  800;
    } 

}

class StaffBig extends Staff {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range =  3;
    } 

}

const arm1 = new Arm();
const bow1 = new Bow();
const sword1 = new Sword();
const knife1 = new Knife();
const staff1 = new Staff();
const bowBig1 = new BowBig();
const poleax1 = new Poleax();
const staffBig1 = new StaffBig();

console.log(arm1);
console.log(bow1);
console.log(sword1);
console.log(knife1);
console.log(staff1);
console.log(bowBig1);
console.log(poleax1);
console.log(staffBig1);


  
