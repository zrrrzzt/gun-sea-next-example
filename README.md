[![Build Status](https://travis-ci.org/zrrrzzt/gun-sea-next-example.svg?branch=master)](https://travis-ci.org/zrrrzzt/gun-sea-next-example)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/zrrrzzt/gun-sea-next-example.svg)](https://greenkeeper.io/)

# gun-sea-next-example

Example app with [GUN/SEA](https://github.com/amark/gun) and [Next.js](https://github.com/zeit/next.js)

## Setup

Clone the repo and install dependencies

```bash
$ npm install
```

## Start

Start the dev server

```bash
$ npm run dev
```

Visit [localhost:3000](http://localhost:3000) to see it.

## What to expect

You can login with almost any username and password. If it doesn't exist the app will create it for you.
As a logged in user you can increase/decrease the number.

## Explore further

Open another browser at [localhost:3000](http://localhost:3000) and loginwith the same username/password. The numbers should sync between browsers.

## Export

To export the app to static

```bash
$ npm run export
```

Deploy the `out`folder wherever you like

## Now

If you use [now](https://zeit.co/now) it's even easier to deploy the app

```bash
$ npm run deploy
```

## License
[MIT](LICENSE)

![Robohash image of gun-sea-next-example](https://robots.kebabstudios.party/gun-sea-next-example.png "Robohash image of gun-sea-next-example")