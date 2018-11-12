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

The project uses Docker for development, however there are a couple of nuances depending on the service.

### Quick Start

```sh
docker-compose up
```
