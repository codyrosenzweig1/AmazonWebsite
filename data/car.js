class Car {
    brand;
    model;
    speed = 0;
    trunkOpen = false;

    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
    }

    displayInfo() {
        return console.log(`${this.brand} ${this.model} ${this.speed} ${this.trunkOpen}`);
    }

    go() {
        if (!this.trunkOpen) {
            if (!(this.speed === 200)) {
                this.speed += 5;
            };
        };
    }

    break() {
        if (this.speed === 0) {
            this.speed = this.speed;
        } else {
            this.speed -= 5;
        };
    }

    openTrunk() {
        if (this.speed > 0) {
            this.trunkOpen = this.trunkOpen;
        } else {
            this.trunkOpen = true;
        }
    }

    closeTrunk() {
        this.trunkOpen = false;
    }
}

class raceCar extends Car{
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }
    go() {
        if (!(this.speed === 300)) {
            this.speed += this.acceleration;
        };
    };

    openTrunk() {
        return ''
    }

    closeTrunk() {
        return ''
    }
}


const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla'
})

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3'
})

car1.displayInfo();
car2.displayInfo();

car2.go();
car2.displayInfo();

car2.break();
car2.openTrunk();
car2.displayInfo();

car2.break();
car2.displayInfo();

const raceCar1 = new raceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20 
})

raceCar1.go();
raceCar1.break();
raceCar1.displayInfo();
