/*
Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

ladder.up();

ladder.up();

ladder.down();

ladder.showStep(); // 1

Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

ladder.up().up().down().showStep(); // 1

Такий підхід широко використовується в бібліотеках JavaScript.
*/



let ladder = {
    step: 0,
    up: function (a) { 
       this.step += a;
       return this
    },
    down: function (b) { 
        this.step -= b;
        return this
    },
    showStep: function () { 
        document.write(`Your step now is ${this.step} <br>`);
        return this
    }
  };

ladder.up(2).down(4).showStep().up(10).up(3).down(5).showStep();
