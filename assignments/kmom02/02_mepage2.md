# Uppgift - "Me page 2"

Jobba vidare med me-sidan och lägg till lite JavaScript.

## Förkunskaper

Du har gjort en första version av [me-sidan](../kmom01/02_mepage.md) och har koll på dess struktur.

## Krav

1. Lägg till menyvalet "kmom02".

1. Ta reda på hur du kan skriva ut dagens datum och lägg till det på den nya sidan.

1. Skapa en funktion som skriver ut "God förmiddag" eller "God eftermiddag" på sidan beroende på om klockan är före eller efter `12.00`.

1. Lägg till din redovisningstext i `redovisning.html`.

### Validering

Se till så koden validerar:

```console
$ cd me
# js
$ npm run linter redovisa/

# html/css
$ dbwebb validate redovisa
```

### Publicering

Glöm inte att publicera koden:

```console
$ cd me
$ dbwebb publish redovisa
```

## Extrauppgift

Om du har tid och kraft.

1. Lägg extra kraft på CSS och styla din me-sida så den blir mer personlig.

1. Lägg till något mer JavaScript på sidan.
