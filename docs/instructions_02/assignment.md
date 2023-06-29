# Uppgift - "Me page 2"

Jobba vidare med me-sidan och utöka med moduler.

## Förkunskaper

Du har gjort en första version av [me-sidan](../instructions_01/assignment.md) och har koll på dess struktur.

## Krav

1. Lägg till menyvalet "kmom02" som ska länka till filen `kmom02.html`.

2. Läs där in scriptet `js/kmom02.js`.

3. Kopiera in modulen "animals" som du ska jobba med: 

  ```console
  # stå i kursroten
  $ mkdir -p me/public/js/modules/kmom02
  $ cp docs/example/animals/animals.js me/public/js/modules/kmom02/`.
  ```
4. Använd modulen via `kmom02.js` och skriv ut på sidan ett slumpmässigt djur från varje kontinent. Vid sidomladdning ska det slumpas ut nya djur. 

5. Skapa en modul `modules/kmom02/greeting.js` som skriver ut "God förmiddag" eller "God eftermiddag" i på sidan beroende på om klockan är före eller efter `12.00`.

6. Kör `dbwebb test kmom02` för att se så allt validerar och att filerna ligger på rätt plats.

```console
$ dbwebb test kmom02
```

7. Publicera koden på studentservern:

```console
$ dbwebb publish public
```



## Extrauppgift

Om du har tid och kraft.

1. Lägg extra kraft på CSS och styla din me-sida så den blir mer personlig.

