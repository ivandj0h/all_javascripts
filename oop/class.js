class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }

  getDetails() {
    return `Name  of this car is ${this.name}`;
  }
}

let carOne = new Vehicle("toyota", "toyota", "1998 cc");

console.log(carOne);
