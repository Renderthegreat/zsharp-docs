# Installation

Z# is distributed via npm as a global CLI tool. To use it, you’ll first need to install Node.js (which includes npm). Then, install Z#, and ZAP (Z#'s crate manager) globally.

## Step 1: Install Node.js

You’ll need **Node.js 18+** to use the Z# tooling. Choose your platform below:

### Windows

1. Download the installer from the [official Node.js website](https://nodejs.org/)
2. Run the installer and follow the prompts
3. Open Command Prompt or PowerShell and check versions:

    ```sh
    node -v
    npm -v
    ```

### macOS

1. Use [Homebrew](https://brew.sh/) to install:

    ```sh
    brew install node
    ```

2. Or download the installer from the [official Node.js website](https://nodejs.org)
3. Verify that the installation was sucessful:

    ```sh
    node -v
    npm -v
    ```

### Linux (Debian/Ubuntu)

1. Run these commands in the terminal
    ```sh
    sudo apt update
    sudo apt install -y nodejs npm
    ```

### Other

Try searching it up on [DuckDuckGo](https://duckduckgo.com/?q=How%20to%20install%20Node.js%20on%20OS_NAME&t=qupzilla).

## Step 2: Install Z#

Once Node.js and npm are installed, you can install the Z# CLI globally by running:

```sh
npm install --global @zsharp/core @zsharp/zap
```

## Step 3: Verify the Installation

To check that Z# is installed correctly, run:

```sh
zsharp --version
zap --version
```

You should see the installed version printed to the console.

## Step 4: Celebrate! 🎉

Congratulations, you have successfully installed Z#! When you are ready, try our [Getting Started Guild](/getting_started/setting_up_zap)!

---

# What's Next?

- [Getting Started Guild - Setting up ZAP](/getting_started/setting_up_zap)