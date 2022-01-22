function Machine() {
    this.state = "stopped";
    this.time = 2000;
    this.timer;
    this.interval;
}

Machine.prototype.run = function () {
    this.state = "started";
    document.getElementById("n1").innerHTML = "Hачинаю работать...";
    document.getElementById("n2").innerHTML = `Время приготовления - ${this.time} `;
    this.interval = setInterval(function () { document.getElementById("n3").innerHTML = " | " }.bind(this), 1000);
    this.timer = setTimeout(this.onReady.bind(this), this.time);
    document.getElementById("n7").innerHTML = this.state;
};

Machine.prototype.onReady = function () {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.state = "stopped";
    // (`Готово! ${this.state}`).innerHTML;
    document.getElementById("n4").innerHTML = `Готово! ${this.state}`;
};

Machine.prototype.stop = function () {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.state = "stopped";
    document.getElementById("n5").innerHTML = `Принудительное выключение ${this.state}`;
}

// let machine = new Machine();

// machine.run();
// let a = document.getElementById("m1");
// let b = document.getElementById("m2");

// if (document.getElementById("m1").onclick) {

function CoffeeMachine() {
    this.drink = "вода";
    Machine.apply(this);
}

CoffeeMachine.prototype = Object.create(Machine.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

document.getElementById("m1").onclick = function () {

    CoffeeMachine.prototype.run = function (drink = "вода") {
        this.drink = drink;
        // if (this.drink == "латте") {
        //     this.time = 5000;
        // }
        // if (this.drink == "эспрессо") {
        //     this.time = 3000;
        // }
        // else {
        //     alert("Такого напитка нет!");
        //     return;
        // }
        switch (this.drink) {
            case "латте":
                this.time = 5000;
                break;
            case "эспрессо":
                this.time = 3000;
                break;
            default:
                alert("Такого напитка нет!");
                stop();
        }
        document.getElementById("n6").innerHTML = `приготовление: ${this.drink}`;
        Machine.prototype.run.apply(this);

    };

    let coffeeMachine = new CoffeeMachine();
    // let a = coffeeMachine.run;
    coffeeMachine.run(prompt("Укажите напиток"));
    // coffeeMachine.stop();
    // }
}

// if (document.getElementById("m2").onclick == true) {
function Multivariate() {
    Machine.apply(this);
}

Multivariate.prototype = Object.create(Machine.prototype);
Multivariate.prototype.constructor = Multivariate;

document.getElementById("m2").onclick = function () {

    Multivariate.prototype.runMultivariate = function (food) {
        this.food = food;
        switch (this.food) {
            case "суп":
                this.time = 10000;
                break;
            case "котлеты":
                this.time = 7000;
                break;
            case "пирог":
                this.time = 15000;
                break;
            default:
                alert("Такого блюда нет!");
                stop();
        }
        document.getElementById("n6").innerHTML = `приготовление: ${this.food}`;
        Machine.prototype.run.apply(this);
    }

    let multivariate = new Multivariate();
    // let b = multivariate.runMultivariate;
    multivariate.runMultivariate(prompt("Укажите блюдо"));
    // }
}