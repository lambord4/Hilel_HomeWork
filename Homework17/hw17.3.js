/*Створіть клас BankAccount, який буде представляти 
банківський рахунок. Додайте властивість балансу та 
методи для внесення та зняття грошей.
*/

class BankAccount {
    #balance;
    constructor (balance) {
        this.#balance = balance
    }
    getBalance () {
        return this.#balance
    }
    deposit (sum) {
        return this.#balance += sum
    }
    withdraw (sum) {
        return this.#balance -= sum
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300