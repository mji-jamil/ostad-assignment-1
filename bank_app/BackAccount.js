class BankAccount {
    static accountNumber = 1001;
    constructor(ownerName, balance) {
        this.accountNumber = BankAccount.accountNumber++;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

const account1 = new BankAccount("Jamil", 1000);
const account2 = new BankAccount("Jamil2", 500);
// const account3 = new BankAccount("Jamil3", 2000);

account1.deposit(200);
account1.withdraw(300);
account1.displayAccountInfo();
// console.log(account1.getBalance());

console.log("............");

account2.deposit(100);
account2.withdraw(700);
account2.displayAccountInfo();
// console.log(account2.getBalance());

// console.log(".............");
//
// account3.displayAccountInfo();
// account3.deposit(1500);