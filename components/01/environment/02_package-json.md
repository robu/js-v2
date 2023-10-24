# JavaScriptmiljön

Förhoppningsvis har du installerat både node och npm. Annars bör du gå tillbaka och göra det först. Är allt på plats kan vi köra igång resten av miljön.



### package.json

Till varje nodeprojekt finns oftast en tillhörande fil, `package.json`. I den filen specificeras det vad projektet ska ha för beroenden och lite allmän information. När man startar ett projekt kör man kommandot `npm init` som i sin tur skapar just den här filen. I den här kursen kommer du använda en färdig fil som du utgår ifrån.

Du ska ha mappen `me/` som rotmapp och där installera alla beroenden för dina program.

Ställ dig i kursens rot och kopiera in filen från exempelmappen:

```console
# Stå i kursroten
$ cp example/configfiles/package.json me/
```

Sedan är det bara att installera:

```console
$ cd me
$ npm install
# diverse utskrift från installationen
```

Du har nu fått en mapp `node_modules` som innehåller alla beroenden och allt som behövs än så länge i kursen. Du kan se vad som installerats i package.json.

Om vi kikar i filen `package.json` kan vi en del kommandon med `npx`. Det är en så kallad "node package runner" som exekverar våra installerade paket utan att behöva ange hela sökvägen.



### Övriga konfigurationsfiler

Det finns fler filer i mappen example/configfiles. Det är konfigurationsfiler vi kommer använda under kursens gång så vi kopierar in dem till vår me-mapp:

```console
# Stå i kursroten
$ cp example/configfiles/{.eslintrc.json,.jsdoc.json,.stylelintrc.json} me/
```

Vi kommer gå igenom alla delarna och beroenden som installerats efter hand.
