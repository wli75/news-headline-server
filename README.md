# news-headline-server

A simple server that fetches headlines from Google News.

## Getting Started
You can either run the bot on Glitch or on your local machine.

### Run on Glitch
https://glitch.com/~news-headline-server

### Run on local machine
* Clone the repository
```
git clone https://github.com/wli75/news-headline-server.git
```
* Install dependencies, build and run the project
```
npm install
npm run build
npm start
```

## Demo

| Method   | URL                            | Description              |
| -------- | ------------------------------ | ------------------------ |
| GET      | /publications/[id]/headlines | Get headlines by publication, where id is the same as the publication id in Google News (e.g. https://news.google.com/publications/[id]) |

```
$ curl --request GET http://localhost:3000/publications/CAAqBwgKMOLs8Aowhd27Ag/headlines
["France Opens Terrorism Probe After Police Knife Attack","Mozambique Says Exxon to Back Africa’s Biggest Ever LNG Project","Biden Fundraising Setback Stirs Questions About His Durability","Larry Summers Slams Rich Cities’ Use of Investment Incentives","North Korean Envoy Says Nuclear Talks With U.S. Break Down","Tyrants Are Bad and Some Are Worse","European Vineyards, Cheesemakers React to Blow From U.S. Tariffs","Pompeo Says State Department Responded to Congress on Ukraine","Medvedev: Trump Impeachment Wouldn’t Harm U.S. Political System","4 Homeless Men Beaten to Death With Pipe in New York City"]
```

## Technologies used
### `dependencies`

| Package         | Description                                      |
| --------------- | -------------------------------------------------|
| express         | Node.js web framework                            |
| inversify       | Dependency injection framework                   |
| puppeteer       | Web-scraping                                     |
| he              | HTML entity encoder/decoder                      |
| winston         | Logging library                                  |
| morgan          | HTTP request logging middleware for node.js      |

### `devDependencies`

| Package        | Description                        |
| -------------- | ---------------------------------- |
| typescript     | JavaScript compiler/type checker   |
| eslint         | Linter                             |
| prettier       | Ensure consistent code format      |
| jest           | Testing library                    |
