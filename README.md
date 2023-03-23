# wewatch
A shared show watch list using Mongoose, Express, Node.js and EJS.

## How It's Built
- Node.js | Express.js | MongoDB/Mongoose | EJS
- [Jikan API, unofficial API from myAnimeList](https://docs.api.jikan.moe/)
- [TVMaze API](https://www.tvmaze.com/api)

## Installation & Setup
1. Install the necessary packages through npm.
```
npm install
```

2. To connect to your own databatase, reate a .env file in the config folder. 
Inside this .env file (/config > .env), add your port and database connection string.
```
PORT = {insert port # here}
DB_STRING = {insert db string url here}
```

3. Use npm run start to run locally.
```
npm run start
```