# Contract Test Workshop

This repository is the basis for a Fresh8 Contract Testing workshop using [Pact](https://docs.pact.io/).

> ![Layout](assets/ContractTestLayout.png)

## Access

| Service  | URL                   |
| -------- | --------------------- |
| Customer | http://localhost:3003 |
| Product  | http://localhost:3002 |
| Order    | http://localhost:3001 |
| Admin    | http://localhost:3000 |

## Setup

The project uses Docker for development, the following command should get you up and running relatively quickly:

```sh
docker-compose up
```

### Running Commands

To run commands on each machine, for installing packages or running tools, you can use the following:

```sh
docker-compose run customer dep ensure
```

In this example, `customer` is the container, and `dep ensure` is the command being run.
