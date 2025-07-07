# Core Concepts

Z# is a low-level, modular programming language built for precision, efficiency, and structure. It gives you full control with minimal built-in assumptions — everything beyond the bare essentials is added via crates.

## The Fundamental Types

Z# starts with only 4 primitive types:

### `byte`

- A raw unit of data that represents **4 bytes of memory** (or 32 0’s and 1’s).
- It’s the most fundamental type — everything else is built on top of it.
- You can represent numbers, characters, and more using `byte` arrays.

### `null`

- Represents the **absence of a value** for a type.
- Unlike `void`, `null` has property access. 
- Used when a value doesn’t require a definition.

### `void`

- Represents the **absence of a value**.
- Used for functions that return nothing.

### `never`

- Represents **unreachable code**.
- Useful for functions that never return, like a crash handler or infinite loop.

## Functions

Functions in Z# are declared with an explicit return type and parameter list:

```zsharp
import 'z#';

function greet(name?: String): String {
  return `Hello, ${name || 'World'}!`;
};

Console.log(greet('Anna')); // Hello, Anna!
Console.log(greet()); // Hello, World! 
```

## Types

Types in Z# are declared by their properties:

```zsharp
import 'z#';

enum gender = {
    male,
    female
};

type Person = {
    name: String,
    birthday: Date,
    gender: Gender,
    parents?: Person[2]
};

let bob: Person = {
    name: 'Bob',
    birthday: new Date(2000, 'march', 11),
    gender: Gender.male
};

let lisa: Person = {
    name: 'Lisa',
    birthday: new Date(2000, 'april', 5),
    gender: Gender.female
};

let sally: Person = {
    name: 'Sally',
    birthday: new Date(2025, 'may', 18),
    gender: Gender.female,
    parents: [ bob, lisa ]
};
```

## Classes

