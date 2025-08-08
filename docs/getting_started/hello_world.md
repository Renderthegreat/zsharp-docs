# Hello, World!

Let’s write your first Z# program — the classic **Hello, World!**.

## Step 1: Create a File

Create a new file called `main.zs`:

```sh
touch main.zs
```

## Step 2: Write the code

Paste the following code into `main.zs`

```zsharp
import 'z#';

Console.log('Hello, World!');

Process.exit(0);
```

<Badge type="tip" text="Don’t worry about the syntax for now — we’ll cover it in the next section." />

## Step 3: Run the Program

Run:

```sh
zs run main.zs
```

You should see:
`Hello, World!`

🎉 That's it — you’ve just written your first Z# program!

---

# What's Next?

- Learn how functions and types work in [Core Concepts](/getting_started/core_concepts.md)
