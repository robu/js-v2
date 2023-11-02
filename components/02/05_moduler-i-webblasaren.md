Moduler i webbläsaren
==================================

I den här artikeln går vi igenom hur vi kan använda moduler i webbläsaren och vad vi behöver ha koll på.


### Introduktion

Av säkerhetsskäl får vi inte peta på filsystemet via JavaScript i webbläsaren. Hade vi fårr tillgång till det hade det öppnats upp oändliga säkerhetshål. Vill vi göra det behöver vi gå via en webbserver. Det är framförallt när vi kör filerna lokalt som vi behöver en egen server. När vi laddar upp dem till exempelvis studentservern behöver vi inte en egen server, utan den sköter det hela.


### Vad behöver vi göra i HTML koden?

Som vi såg i artikeln "[Modules](./01_modules.md)" så behöver vi ange attributet `"type": "module"` i script-taggen i .html-filen där vi läser in JavaScriptfilen. Det borde då se ut ungefär så här: `<script type="module" src="path/to/file.js"></script>`.


#### Webbserver

Om vi tittar i package.json så kan vi se raden:

```json
"http-server": "npx http-server -p 9001"
```

Det är en lite webbserver som körs på port 9001 och med hjälp av den kan vi använda modulerna lokalt.

Starta den med:

```console
# Ställ dig i mappen me/
$ npm run http-server

> dv1657@1.0.0 http-server
> npx http-server -p 9001

Starting up http-server, serving ./public

http-server version: 14.1.1

http-server settings:
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:9001
  http://194.47.142.60:9001
Hit CTRL-C to stop the server
```

Vi kan nu öppna en webbläsare och gå in på `localhost:9001` och se våra filer, med moduler och allt.
