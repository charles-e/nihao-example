<p align="center">
  <a href="https://safecoin.com">
    <img alt="Safecoin" src="https://github.com/Fair-Exchange/safecoinwiki/blob/master/Logos/SafeCoin/SafeCoin-Logo-with-text.png/" width="250" />
  </a>
</p>


# Ni Hao on Safecoin

This project demonstrates how to use the [Safecoin Javascript
API](https://github.com/Fair-Exchange/safecoin-web3.js) to
interact with programs on the Safecoin blockchain.

The project comprises of:

* An on-chain Ni Hao (你好) program
* A client that can send a "你好" to an account and get back the number of
  times "你好" has been sent

## Translations
- [Traditional Chinese](README_ZH_TW.md)
- [Simplified Chinese](README_ZH_CN.md)

## Table of Contents
- [Hello world on Safecoin](#hello-world-on-safecoin)
  - [Table of Contents](#table-of-contents)
  - [Quick Start](#quick-start)
    - [Start local Safecoin cluster](#start-local-safecoin-cluster)
    - [Build the on-chain program](#build-the-on-chain-program)
    - [Run the client](#run-the-client)
    - [Expected output](#expected-output)
      - [Not seeing the expected output?](#not-seeing-the-expected-output)
    - [Customizing the Program](#customizing-the-program)
  - [Learn about Safecoin](#learn-about-safecoin)
  - [Learn about the client](#learn-about-the-client)
    - [Entrypoint](#entrypoint)
    - [Establish a connection to the cluster](#establish-a-connection-to-the-cluster)
    - [Load the nihao on-chain program if not already loaded](#load-the-helloworld-on-chain-program-if-not-already-loaded)
    - [Send a "你好" transaction to the on-chain program](#send-a-nihao-transaction-to-the-on-chain-program)
    - [Query the Safecoin account used in the "你好" transaction](#query-the-safecoin-account-used-in-the-hello-transaction)
  - [Learn about the on-chain program](#learn-about-the-on-chain-program)
    - [Programming on Safecoin](#programming-on-Safecoin)
  - [Pointing to a public Safecoin cluster](#pointing-to-a-public-safecoin-cluster)
  - [Expand your skills with advanced examples](#expand-your-skills-with-advanced-examples)

## Quick Start

The following dependencies are required to build and run this example, depending
on your OS, they may already be installed:

- Install node (v14 recommended)
- Because version 14 in pretty old, using nvm is recommended for installing npm
- Install npm
- Install the latest Rust stable from https://rustup.rs/
- Install Safecoin v1.6.19 or later from
  https://docs.safecoin.com/cli/install-safecoin-cli-tools

If this is your first time using Rust, these [Installation
Notes](README-installation-notes.md) might be helpful.

### Configure CLI 

> If you're on Windows, it is recommended to use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to run these commands

1. Set CLI config url to localhost cluster

```bash
$ safecoin config set --url localhost
```

2. Create CLI Keypair

If this is your first time using the Safecoin CLI, you will need to generate a new keypair:

```bash
$ safecoin-keygen new
```

### Start local Safecoin cluster

This example connects to a local Safecoin cluster by default.

Start a local Safecoin cluster:
```bash
$ safecoin-test-validator
```
> **Note**: You may need to do some [system tuning](https://docs.safecoin.com/running-validator/validator-start#system-tuning) (and restart your computer) to get the validator to run

Listen to transaction logs:
```bash
$ safecoin logs
```

### Install npm dependencies

```bash
$ npm install
```

### Build the on-chain program

There is both a Rust and C version of the on-chain program, whichever is built
last will be the one used when running the example.

```bash
$ npm run build:program-rust
```

```bash
$ npm run build:program-c
```

### Deploy the on-chain program

```bash
$ safecoin program deploy dist/program/helloworld.so
```

### Run the JavaScript client

```bash
$ npm run start
```

### Expected output

Public key values will differ:

```bash
Let's say 你好 to a Safecoin account...
Connection to cluster established: http://localhost:8328 { 'feature-set': 113641441, 'solana-core': '1.6.19' }
Using account 4HgMxTAh8ytJTRGwiSir3cLgLfNUkM51UWXL2m893PNH containing 499.10058456 SAFE to  pay for fees
Using program Dwna2xsheerXNAT7V2pGak9ffwvyKfKRKedH1qVpM3cM
Saying 你好，to 7B5jk39tGnQ3upsHpWQbfrKCe6mJxWRzSo43jTc5fyD5
7B5jk39tGnQ3upsHpWQbfrKCe6mJxWRzSo43jTc5fyD5 has been greeted 4 time(s)
Success
```

#### Not seeing the expected output?

- Ensure you've [started the local cluster](#start-local-safecoin-cluster),
  [built the on-chain program](#build-the-on-chain-program) and [deployed the program to the cluster](#deploy-the-on-chain-program).
- Inspect the program logs by running `safecoin logs` to see why the program failed.
  - ```bash
    Transaction executed in slot 5621:
    Signature: 4pya5iyvNfAZj9sVWHzByrxdKB84uA5sCxLceBwr9UyuETX2QwnKg56MgBKWSM4breVRzHmpb1EZQXFPPmJnEtsJ
    Status: Error processing Instruction 0: Program failed to complete
    Log Messages:
      Program G5bbS1ipWzqQhekkiCLn6u7Y1jJdnGK85ceSYLx2kKbA invoke [1]
      Program log: Hello World Rust program entrypoint
      Program G5bbS1ipWzqQhekkiCLn6u7Y1jJdnGK85ceSYLx2kKbA consumed 200000 of 200000 compute units
      Program failed to complete: exceeded maximum number of instructions allowed (200000) at instruction #334
      Program G5bbS1ipWzqQhekkiCLn6u7Y1jJdnGK85ceSYLx2kKbA failed: Program failed to complete

### Customizing the Program

To customize the example, make changes to the files under `/src`.  If you change
any files under `/src/program-rust` or `/src/program-c` you will need to
[rebuild the on-chain program](#build-the-on-chain-program) and [redeploy the program](#deploy-the-on-chain-program).

Now when you rerun `npm run start`, you should see the results of your changes.

## Learn about Safecoin

More information about how Safecoin works is available in the [Safecoin
documentation](https://docs.safecoin.com/) and all the source code is available on
[github](https://github.com/Fair-Exchange/safecoin)

Further questions? Visit us on [Discord](https://discordapp.com/invite/pquxPsq)

## Learn about the client

The client in this example is written in TypeScript using:
- [Safecoin web3.js SDK](https://github.com/Fair-Exchange/safecoin-web3.js)
- [Safecoin web3 API](https://Fair-Exchange.github.io/safecoin-web3.js)

### Entrypoint

The [client's
entrypoint](https://github.com/Fair-Exchange/example-helloworld/blob/ad52dc719cdc96d45ad8e308e8759abf4792b667/src/client/main.ts#L13)
does five things.

### Establish a connection to the cluster

The client establishes a connection with the cluster by calling
[`establishConnection`](https://github.com/Fair-Exchange/example-helloworld/blob/ad52dc719cdc96d45ad8e308e8759abf4792b667/src/client/hello_world.ts#L92).

### Establish an account to pay for transactions

The client ensures there is an account available to pay for transactions,
and creates one if there is not, by calling
[`establishPayer`](https://github.com/Fair-Exchange/example-helloworld/blob/ad52dc719cdc96d45ad8e308e8759abf4792b667/src/client/hello_world.ts#L102).

### Check if the helloworld on-chain program has been deployed

In [`checkProgram`](https://github.com/Fair-Exchange/example-helloworld/blob/ad52dc719cdc96d45ad8e308e8759abf4792b667/src/client/hello_world.ts#L144),
the client loads the keypair of the deployed program from `./dist/program/helloworld-keypair.json` and uses
the public key for the keypair to fetch the program account. If the program doesn't exist, the client halts
with an error. If the program does exist, it will create a new account with the program assigned as its owner
to store program state (number of hello's processed).

### Send a "Hello" transaction to the on-chain program

The client then constructs and sends a "Hello" transaction to the program by
calling
[`sayHello`](https://github.com/Fair-Exchange/example-helloworld/blob/ad52dc719cdc96d45ad8e308e8759abf4792b667/src/client/hello_world.ts#L209).
The transaction contains a single very simple instruction that primarily carries
the public key of the helloworld program account to call and the "greeter"
account to which the client wishes to say "Hello" to.

### Query the Safecoin account used in the "Hello" transaction

Each time the client says "Hello" to an account, the program increments a
numerical count in the "greeter" account's data.  The client queries the
"greeter" account's data to discover the current number of times the account has
been greeted by calling
[`reportGreetings`](https://github.com/Fair-Exchange/example-helloworld/blob/ad52dc719cdc96d45ad8e308e8759abf4792b667/src/client/hello_world.ts#L226).

## Learn about the on-chain program

The [on-chain helloworld program](/src/program-rust/Cargo.toml) is a Rust program
compiled to [Berkley Packet Format
(BPF)](https://en.wikipedia.org/wiki/Berkeley_Packet_Filter) and stored as an
[Executable and Linkable Format (ELF) shared
object](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format).

The program is written using:
- [Safecoin Rust SDK](https://github.com/Fair-Exchange/safecoin/tree/master/sdk)

### Programming on Safecoin

To learn more about Safecoin programming model refer to the [Programming Model
Overview](https://docs.safecoin.com/developing/programming-model/overview).

To learn more about developing programs on Safecoin refer to the [On-Chain 
Programs Overview](https://docs.safecoin.com/developing/on-chain-programs/overview)

## Pointing to a public Safecoin cluster

Safecoin maintains three public clusters:
- `devnet` - Development cluster with airdrops enabled
- `testnet` - Tour De Sol test cluster without airdrops enabled
- `mainnet-beta` -  Main cluster

Use the Safecoin CLI to configure which cluster to connect to.

To point to `devnet`:
```bash
$ safecoin config set --url devnet
```

To point back to the local cluster:
```bash
$ safecoin config set --url localhost
```

## Expand your skills with advanced examples

There is lots more to learn; The following examples demonstrate more advanced
features like custom errors, advanced account handling, suggestions for data
serialization, benchmarking, etc...

- [Programming
  Examples](https://github.com/Fair-Exchange/safecoin-program-library/tree/master/examples)
- [Token
  Program](https://github.com/Fair-Exchange/safecoin-program-library/tree/master/token)
- [Token Swap
  Program](https://github.com/Fair-Exchange/safecoin-program-library/tree/master/token-swap)
