// დავალება 1
const array = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9];

const positiveNumbers = array.filter((numbers) => numbers > 0);
console.log('Positive Numbers', positiveNumbers);

const sum = positiveNumbers.reduce((total, numbers) => {
    return total + numbers;
},0);
console.log("Sum of Positive Numbers", sum);

// დავალება 2
const stringArray = ['a', 'b', 'c', 'a', 'd', 'c', 'a', 'e', 'a', 'a', 'b', 'c'];
console.log(stringArray);
const stringValue = stringArray.reduce((str, value) => {
    console.log(str, value);
    str[value] = ((str[value] || 0) + 1);
    console.log(str[value]);
    return str;
}, {});
console.log(stringValue);

// დავალება 3
class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        this.speed = 0;
        this.motion = "The car is not moving";
    }
    check_motion = () =>{
        this.motion = this.speed > 0 ? "The car is moving" : "The car is not moving";
    }
    accelerate = (speed) => {
        this.speed += speed;
        this.check_motion();
    }
    brake = (speed) =>{
        this.speed -= speed;
        if( this.speed < 0){
            this.speed = 0;
        }
        this.check_motion();
    }
    emergency_brake = () =>{
        this.speed = 0;
        this.check_motion();
    }
    status = () =>{
        return `მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსი: ${this.motion}`
    }
}

let car = new Car('Bugatti', 'Chiron');
console.log(car.status());

car.brake(50);
console.log(car.status());

car.accelerate(170);
console.log(car.status());

car.brake(70);
console.log(car.status());

car.accelerate(150);
console.log(car.status());

car.emergency_brake();
console.log(car.status());

// დავალება 4
const addAsync = (arg1, arg2) => {
    return new Promise((resolve, reject) => {
        if(arg1 !== undefined && arg2 !== undefined && typeof arg1 === 'number' && typeof arg2 === 'number'){
            resolve(arg1 * arg2);
        }
        else{
            reject("error");
        }
    })
}

addAsync(5, 5)
.then((value) => console.log(value))
.catch((error) => console.log(error))

addAsync('a', 5)
.then((value) => console.log(value))
.catch((error) => console.log(error))

addAsync(5, '5')
.then((value) => console.log(value))
.catch((error) => console.log(error))