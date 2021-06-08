Webpack
==================================

### Vad är webpack?

Webpack är en *module bundler* för JavaScript applikationer. Vi kan med hjälp av webpack bygga ihop ett beroende av de olika modulerna som applikationen använder och som sedan byggs ihop till en fil som vi i sin tur kan köra i webbläsaren.



### Installera

Vi känner till [npm](https://www.npmjs.com) och vi vet att det är en pakethanterare för Node. Vi ska använda npm för att installera *webpack*.

```console
$ npm install --save-dev webpack webpack-cli clean-webpack-plugin
```

Nu läggs det till några rader i package.json:

```json
...
"clean-webpack-plugin": "^4.0.0-alpha.0",
"webpack": "^5.38.1",
"webpack-cli": "^4.7.0"
...
```



### Komma igång

Vi börjar med att skapa en konfigurationsfil för webpack där vi pekar ut vilken JavaScript fil vi vill ha som ingång (entry) för vår applikation. Vi definierar även vilken fil vi vill att alla moduler ska kompileras till (output). Vi döper konfigurationsfilen till webpack.config.js.

```js
// webpack.config.js

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './js/main.js',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```


Vi vill alltså börja appen från `entry`-filen `src/main.js`. Vi använder sedan `path` modulen i nodejs för att peka ut sökvägen så den kompilerade filen hamnar i `dist/bundle.js`.

Raden `mode: 'development',` berättar för webpack att vi just nu hållar på att utveckla så vi vill ha att filerna kompileras för utveckling. Vi kommer senare i artikeln se hur vi bygger produktionsfiler.

Raden `devtool: 'inline-source-map',` gör att i `bundle.js` får vi med information om vilken ursprungsfil koden kommer ifrån. Det gör det mycket lättare att felsöka under utveckling.

För att kompilera JavaScript koden använder vi oss av kommandot `webpack --watch` i vår package.json fil. Då vi döpt vår konfigurationsfil till default-namnet `webpack.config.js` vet webpack redan om vilka filer vi ska utgå ifrån och vart den kompilerade filen ska läggas. Du kan nu köra kommandot `npm start` i terminalen och vår applikation kompileras. Vi kan nu lägga till `dist/bundle.js` längst ner i `index.html` som den enda JavaScript filen vi importerar.

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "webpack --watch"
},
```


### Produktionskod

Om vi tittar på filen `dist/bundle.js` är det en ganska så stor JavaScript-fil och består till stor del av saker vi inte behöver i produktion. Vi kommer i detta stycket se hur vi kan få ner den ursprungliga storleken rejält.

Vi börjar med att döpa om `webpack.config.js` till `webpack.dev.config.js`, då kan vi skilja på konfigurationen för utveckling och för produktion. Vi ändrar sedan i `package.json` så vårt `npm start` script ser ut som följande. Skillnaden nu är att vi pekar ut konfigurationsfilen istället för att förlita oss på att webpack letar upp den själv.

```json
"start": "webpack --watch --config webpack.dev.config.js",
```

Vi skapar nu filen `webpack.prod.config.js` och där har vi konfigurationen för produktionskoden. Den stora skillnaden är att vi har valt `mode: production` och tagit bort att vi vill skapa source-maps.

```js
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './js/main.js',
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}
```

Vi lägger även till ett script i vår `package.json` så vi kan bygga produktionsfilerna:

```json
"start": "webpack --watch --config webpack.dev.config.js",
"build": "webpack --config webpack.prod.config.js"
```

Vi kan nu köra script `build` med kommandot `npm run build`. Vi ser alltså att vi kan lägga till vilket script som helst och använda `run` framför scriptets namn för att köra det.


### Avslutningsvis

Vi har i denna övning tittat på hur vi kan skapa en bättre struktur för vår JavaScript och hur vi explicit definierar vilka JavaScript moduler vi vill använda. Webpack kan konfigureras till att ta hand om alla våra assets: JavaScript, CSS/SASS och bilder, men i denna övning får det räcka med att vi kompilerar vår JavaScript till en enda fil. För mer information om [webpack](https://webpack.js.org) se deras utmärkta hemsida med bra dokumentation och guides.
