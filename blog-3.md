# Generics in TypeScript

## What are Generics?

Generics in TypeScript help developers create reusable functions, classes, and components that can work with different data types while keeping type safety.

Instead of writing separate code for strings, numbers, or objects, we can write one generic function that works for all types.

---

## Example

```typescript
const getValue = <T>(value: T): T => {
  return value;
};

console.log(getValue<string>("Hello"));
console.log(getValue<number>(100));
```

Here, `T` is a generic type.

- If we pass a string, `T` becomes `string`.
- If we pass a number, `T` becomes `number`.

TypeScript automatically keeps the correct type.

---
