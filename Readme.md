## Description

This is the setup for the application side

For the Server-side code you can find them [here](https://github.com/jyling/movie-encyclopedia-server)
## Requirement
- Nodejs v14.15.5
- NPM v6.14.11

## Installation

### Step 1: Install the package
```bash
$ npm install
```

### Step 2: You will need to modify the env file in order for the client to work
#### You will need 1 graphql endpoint of the grapql server
```env
#apolloClient have some issue with localhost or at least when i did it, so the ip of the host computer is needed
graphqlServer=http://192.168.1.150:3000/graphql
```


## Running the app

```bash
# run android
$ npm run android

# start the react-native server
$ npm start
```

## License

Nest is [MIT licensed](LICENSE).
