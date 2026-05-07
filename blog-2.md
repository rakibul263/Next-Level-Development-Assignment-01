# Pick and Omit Utility Types in TypeScript

## What are Pick and Omit?

`Pick` and `Omit` are utility types in TypeScript. They help developers create smaller and specialized versions of a large interface without writing the same code again.

This helps keep code clean and reusable.

---

## Pick Example

`Pick` is used to select specific properties from an interface.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserName = Pick<User, "name">;
```

Here, `UserName` only contains the `name` property.

---

## Omit Example

`Omit` is used to remove specific properties from an interface.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">;
```

Here, `UserWithoutEmail` contains all properties except `email`.

---

## How They Prevent Code Duplication

Without `Pick` and `Omit`, developers would need to create multiple interfaces manually. This would repeat the same properties many times.

Using these utility types allows developers to reuse the main interface and create smaller versions easily.

This follows the **DRY (Don't Repeat Yourself)** principle because the same code does not need to be written again and again.

---
