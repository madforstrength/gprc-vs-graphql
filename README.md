# grpc-vs-graphql

Performance testing for gRPC and GraphQL

## Setting up the development environment

You will need:

- [Yarn](https://yarnpkg.com/lang/en/docs/install)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [VS Code](https://code.visualstudio.com/download) (recommended)

Once everything is installed, run `yarn` to install the node packages. See `./packages.json` for scripts.

```bash
yarn
```

## Starting gRPC and GraphQL servers

Start gRPC server

```bash
yarn start-grpc-server
```

Start GarphQL server

```bash
yarn start-graphql-server
```

## Running performance tests

Run gRPC client

```bash
yarn start-grpc-client
```

Run GarphQL client

```bash
yarn start-graphql-client
```
