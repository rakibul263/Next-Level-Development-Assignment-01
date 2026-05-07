## Why is `any` called a “type safety hole”?

`any` is called a **type safety hole** because it disables TypeScript’s type checking system. When a variable uses the `any` type, TypeScript allows any operation without showing errors during compilation. This can create unexpected runtime errors.

### Example

```typescript
let value: any = 10;

value.toUpperCase(); // Error
```

In this example, TypeScript does not stop the invalid operation because the variable is typed as `any`.

---

## Why is `unknown` safer?

`unknown` is a safer alternative because TypeScript requires developers to check the type before using the value. This helps prevent mistakes and improves code safety.

### Example

```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Here, TypeScript allows the operation only after confirming that the value is a string.

---

## What is Type Narrowing?

**Type narrowing** means reducing a general type into a more specific type using conditions such as `typeof`, `instanceof`, or custom checks.

### Example

```typescript
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

In this example:

- Inside the `if` block, TypeScript knows `value` is a string.
- Inside the `else` block, TypeScript knows `value` is a number.

---
