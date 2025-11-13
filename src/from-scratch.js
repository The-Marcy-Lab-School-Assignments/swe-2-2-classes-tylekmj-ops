class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return this.length * 2 + this.width * 2;
  }

  isSquare() {
    return this.length === this.width ? true : false;
  }
}

class Vehicle {
  color = "black";
  passengers = [];

  constructor(type, capacity, color) {
    this.type = type;
    this.capacity = capacity;
    if (color) this.color = color;
  }

  paint(color) {
    this.color = color;
    return color;
  }

  addPassenger(passenger) {
    this.passengers.push(passenger);
    return this.passengers.length <= this.capacity
      ? this.passengers.length
      : -1;
  }
}

class PasswordManager {
  #password;
  constructor(password) {
    this.#password = password;
  }

  checkPassword(attempt) {
    return attempt === this.#password ? true : false;
  }

  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return true;
    }

    return false;
  }
}

class TodoList {
  #items = [];

  constructor(title) {
    this.title = title;
  }

  addItem(description) {
    this.#items.push(description);
    return this.#items.length;
  }

  removeItem(description) {
    index = this.#items.indexOf(description);
    let found = this.#items[index]
    if (index === -1) {
      return null;
    }

    this.#items.splice(index, 1);
    return found
  }

  getItems() {
    return [...this.#items];
  }
}

class BankAccount {
  #balance = 0;
  static #total = 0

  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;

    if (balance) this.#balance = balance;
    BankAccount.#total += balance
  }

  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }

  deposit(amount) {
    this.#balance += amount;
    BankAccount.#total += amount
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return "You do not have enough funds.";
    }

    BankAccount.#total -= amount
    this.#balance -= amount;
    return `Your balance is $${this.#balance.toFixed(2)}.`;
  }

  static getTotalHoldings() {
    return BankAccount.#total
  }
}

class Vault {
  #secrets = [];

 
  addSecret(newSecret) {
    this.#secrets.push(newSecret);
  }
  listSecrets() {
    return [...this.#secrets];
  }
}

const vault = new Vault()

console.log(vault.addSecret("hi"))
console.log(vault.listSecrets("hi"))
module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
