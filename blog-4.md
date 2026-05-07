# Four Pillars of OOP in TypeScript

## Introduction

The four pillars of Object-Oriented Programming (OOP) are:

1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation

These concepts help developers manage logic, reduce complexity, and write clean and reusable code in large TypeScript projects.

---

# 1. Inheritance

Inheritance allows one class to use the properties and methods of another class.

### Example

```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, grade: string) {
    super(name);
    this.grade = grade;
  }
}
```

### Benefits

- Reduces duplicate code
- Improves code reusability
- Makes code easier to maintain

---

# 2. Polymorphism

Polymorphism allows the same method to behave differently in different classes.

### Example

```typescript
class Animal {
  sound(): void {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound(): void {
    console.log("Dog barks");
  }
}
```

### Benefits

- Makes code flexible
- Helps handle multiple object types easily
- Improves scalability

---

# 3. Abstraction

Abstraction hides unnecessary details and shows only important features.

### Example

```typescript
abstract class Vehicle {
  abstract start(): void;
}

class Car extends Vehicle {
  start(): void {
    console.log("Car started");
  }
}
```

### Benefits

- Reduces complexity
- Focuses on important functionality
- Makes code easier to understand

---

# 4. Encapsulation

Encapsulation protects data by keeping variables private and controlling access.

### Example

```typescript
class BankAccount {
  private balance: number = 1000;

  getBalance(): number {
    return this.balance;
  }
}
```

### Benefits

- Protects data from unwanted changes
- Improves security
- Keeps code organized

---
