# Flip-Table ![Build](https://travis-ci.org/AGhost-7/node-flip-table.svg?branch=master)

Flip some tables.

![flip](https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FX83Y7r03T6uty%2Fgiphy.gif&f=1)

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

Flip sql table:

```
> flip-table --sql postgres://postgres@localhost:5432/template1 foobar
```

Flip many sql tables:

```
> psql -U postgres -q -t -c "select table_name from information_schema.tables where table_schema not in ('pg_catalog', 'information_schema')"| \
  xargs flip-table --sql postgres://localhost
```
