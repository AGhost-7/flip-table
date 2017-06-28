# Flip-Table ![Build](https://travis-ci.org/AGhost-7/node-flip-table.svg?branch=master)
Flip table meme.

## Installation
```
npm install --global flip-table
```

Or the shorthand syntax:
```
npm i -g flip-table
```

## Usage

Enter your message and send to clipboard:
```
> flip-table Hello world
```

Pipe message to `flip-table` and send to clipboard.
```
> echo Hello world | flip-table
```

Enter your message and send to stdout.
```
> flip-table -o Hello world
(╯°□°）╯︵ plɹoʍ ollǝH
```

Pipe your message and sent to stdout.
```
> echo Hello world | flip-table -o
(╯°□°）╯︵ plɹoʍ ollǝH
```

Unflip the message:
```
> flip-table -o okthkxbye | flip-table -ou
okthkxbye ノ( º _ ºノ)
```
