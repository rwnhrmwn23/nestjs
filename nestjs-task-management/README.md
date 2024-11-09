<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation
```bash
$ yarn install
```

```bash
## Running the app

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Documentation
## Base URL API

```
http://localhost:3000/
```

## Table Endpoints

### Customer

| Name                | Endpoint                          | Method   | Bearer token | Body and response                     |
|---------------------|-----------------------------------|----------|--------------|---------------------------------------|
| Sign Up             | `auth/signup`                     | `POST`   | No           | [example](#sign-up---post)            |
| Sign In             | `auth/signin`                     | `POST`   | No           | [example](#sign-in---post)            |
| Create Task         | `tasks`                           | `POST`   | Yes          | [example](#create-task---post)        |
| Update Task         | `tasks/:id/status`                | `PATCH`  | Yes          | [example](#update-task---patch)       |
| Delete Task         | `tasks/:id`                       | `DELETE` | Yes          | [example](#delete-task---delete)      |
| Get All Task        | `tasks`                           | `GET`    | Yes          | [example](#get-all-tasks---get)       |
| Get Task by Id      | `tasks/:id`                       | `GET`    | Yes          | [example](#get-task-by-id---get)      |
| Get Task by Filters | `tasks?status=OPEN&search=basket` | `GET`    | Yes          | [example](#get-task-by-filters---get) |

### Sign Up - POST

```
POST auth/signup
```

Body

```json
{
  "username": "irwan",
  "password": "@Irwan23"
}
```

Response

```json
{
  "statusCode": 200,
  "message": "createUser successfully",
  "data": null
}
```

### Sign In - POST

```
POST auth/signin
```

Body

```json
{
  "username": "irwan",
  "password": "@Irwan23"
}
```

Response

```json
{
  "statusCode": 200,
  "message": "signIn successfully",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.[...]"
  }
}
```

### Create Task - POST

```
POST tasks
```

Body

```json
{
  "title": "play basket",
  "description": "playing basketball is cool"
}
```

Response

```json
{
  "statusCode": 200,
  "message": "Tasks created successfully",
  "data": {
    "title": "play basket",
    "description": "playing basketball is cool",
    "status": "OPEN",
    "id": "1c5048bf-22a8-42c5-946a-4504069d7079"
  }
}
```

### Update Task - PATCH

```
PATCH tasks/:id/status
```

Body

```json
{
  "status": "IN_PROGRESS"
}
```

IN_PROGRESS, OPEN or DONE

Response

```json
{
  "statusCode": 200,
  "message": "Tasks updated successfully",
  "data": {
    "id": "1c5048bf-22a8-42c5-946a-4504069d7079",
    "title": "play basket",
    "description": "playing basketball is cool",
    "status": "IN_PROGRESS"
  }
}

```

### Delete Task - DELETE

```
DELETE tasks/:id
```

Params

param task id

Response

```json
{
  "statusCode": 200,
  "message": "Tasks deleted successfully",
  "data": null
}
```

### Get All Tasks - GET

```
GET tasks
```

Response

```json
{
  "statusCode": 200,
  "message": "Tasks retrieved successfully",
  "data": [
    {
      "id": "d804d9b3-0da2-4dae-9b4b-c5bbd9e14399",
      "title": "play guitar",
      "description": "playing guitar is cool",
      "status": "OPEN"
    },
    {
      "id": "250bb754-910e-4e1f-a4c3-21752a914da5",
      "title": "play basket",
      "description": "playing basketball is cool",
      "status": "OPEN"
    }
  ]
}
```

### Get Task by Id - GET

```
GET tasks/:id
```

Params

param task id

Response

```json
{
  "statusCode": 200,
  "message": "Tasks created successfully",
  "data": {
    "title": "play basket",
    "description": "playing basketball is cool",
    "status": "OPEN",
    "id": "250bb754-910e-4e1f-a4c3-21752a914da5"
  }
}

```

### Get Task by Filters - GET

```
GET tasks/:id
```

Query

status (OPEN, IN_PROGRESS, DONE)

search (search by title or description)

Response

```json
{
  "statusCode": 200,
  "message": "Tasks retrieved successfully",
  "data": [
    {
      "id": "250bb754-910e-4e1f-a4c3-21752a914da5",
      "title": "play basket",
      "description": "playing basketball is cool",
      "status": "OPEN"
    }
  ]
}

```

## License

Nest is [MIT licensed](LICENSE).
