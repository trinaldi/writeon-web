# WriteOn

I'm *specially* a moron when it comes to React at this point of time

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Rationale

This is your beginner todo app suited to my needs. I have a notebook with this 
exact same layout and content. The goal is practice while keeping my notes, thougths 
and other stuff up to date.

## Running

As mentioned above, this app was bootstraped with [Create React App](https://github.com/facebook/create-react-app).
Hence

```sh
$ yarn start
```

will run the dev environment. The backend is fueled by [WriteOn](https://github.com/trinaldi/writeon)

## Docker

As of 2022-12-29 we also have a `Dockerfile` and `docker-compose.yml`. The first is a set of instruction to build a docker image of the app 
whereas the second is used to run a container of the image.

Make sure ypu have [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose/install/) installed. With the Docker service running, type:

```sh
$ docker-compose up
```

inside the root path.


## Contributing

If you wanna contribute in _any_ form with code, ideas, critique, please use the 
issues.
