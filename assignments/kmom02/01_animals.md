# Uppgift - "Animals"

I den här uppgiften ska du skapa ett par moduler som exporterar fördefinierad funktionalitet.

Du jobbar i mappen `kmom02/`.



### Förutsättning

Det förutsätts att du gått igenom artiklarna för [kursmoment 02](../../articles/kmom02).



### Intro

Efter ditt jobb med glaciärerna är dina kunskaper efterfrågade i andra sammanhang. Organisationen "Hållbara djur" vill att du hjälper dem med dokumentationen av utrotningshotade djur. De vill ha en uppsättning av något som tydligen kallas "ES moduler".

Den data du kan få är listor på några utrotningshotade djur i olika platser på jorden. Du hittar tre filer i exempelmappen som du börjar med att kopiera in i arbetsmappen:

```console
# Stå i kursmappens rot
$ cp example/kmom02/*.mjs me/kmom02/
```



### Krav

1. Skapa en fil `kmom02/main.mjs` som du kan ha för att testa dina moduler.

1. Skapa en fil `helpers.mjs` ska exportera följande funktioner:

    | Namn        |  Exempel | Vad ska hända?  |
    | ------------- | -------- | :-----|
    | allAnimals(&lt;string&gt;) | allAnimals(), allAnimals("africa"), allAnimals("africa", "europe") | Returnera en array med alla djur från &lt;string&gt;. Giltiga argument är `africa`, `europe`, `america`. Om inget argument skickas med ska det returneras en sammanslagen array med samtliga djur. Det ska fungera med 0, 1, 2 eller 3 argument.|
    | getRandomAnimal(&lt;array&gt;)| getRandomAnimal(africanAnimals)   |   Returnera ett slumpmässigt djur från arrayen. |
    | addAnimal(&lt;array&gt;, &lt;string&gt;)| addAnimal(africanAnimals, "Flamingo")  | Lägg till ett nytt djur i listan. |
    | removeAnimal(&lt;array&gt;, &lt;string&gt;)| removeAnimal(africanAnimals, "Flamingo") | Ta bort ett djur från listan. Returnera information om det gick bra eller inte. Se nedan för exempel. |

    **removeAnimal**: Om man till exempel försöker ta bort `Monarch butterfly` från de amerikanska djuren ska det returneras:
    ```console
    Removed: Monarch butterfly
    ```
    Om man istället försöker ta bort ett värde som inte finns, till exempel `Tyrannosaurus`, från någon array ska det returneras:
    ```console
    No "Tyrannosaurus" in array.
    ```

    Ovan ska såklart fungera med alla djur, inte bara exemplet.

1. Skapa en ny modul: `report.mjs` som ska exportera följande funktioner:

    | Namn        | Exempel | Vad ska hända?  |
    | ------------- | -------- |:-----|
    | prettyPrint(&lt;string&gt;, &lt;array&gt;)| prettyPrint("African", africanAnimals) |  Returnera en rapport av alla inskickade djur. Se nedan för exempel. |
    | fixFirstLetter(&lt;array&gt;) | fixFirstLetter(africanAnimals)  |   Returnera arrayen där första bokstaven på alla djur är gjord till versal. |
    | sortAnimals(&lt;array&gt;) | sortAnimals(africanAnimals) | Returnera den inskickade arrayen sorterad alfabetiskt i stigande ordning. Du ska göra skillnad på gemener och versaler. |
    | filterAnimals([&lt;array&gt;, &lt;array&gt;...], &lt;int&gt;) | filterAnimals([africanAnimals, americanAnimals], 10) | Returnera en array med alla djur som har färre eller lika många bokstäver (inte tecken) som den inskickade siffran. Se nedan för exempel. |


    **prettyPrint** Om man exekverar prettyPrint med argumenten `African` och en array med alla Afrikas djur, `prettyPrint('African', africanAnimals)` ska man få utskriften:

    ```console
    --- REPORT ---
    African animals

    * Ethiopian wolf
    * Black rhino
    * White rhino
    * Mountain gorilla
    * African wild Dog
    * African penguin
    * Giraffe
    * Hooded vulture
    * Chimpanzee
    ```

    Använder man andra argument ska man såklart få en annan utskrift, men i samma format.

    **filterAnimals** Om funktionen exekveras med alla afrikanska och amerikanska djur samt siffran 10, `filterAnimals([africanAnimals, americanAnimals], 10)`, ska resultatet bli:

    ```console
    [
      'Pangolin',
      'Black rhino',
      'White rhino',
      'Giraffe',
      'Chimpanzee',
      'Delta Smelt'
    ]
    ```



### Extra uppgift (Optionell)

Skapa en ny funktion `sortAnimalsExtra()` som ska sortera enligt tidigare, men inte bry sig om gemener och versaler, utan allt ska hamna i ordning, tex:

```console
[
  'African penguin',
  'african pterodactyl', <--- notera
  'African wild dog',
  'Black rhino',
  'Chimpanzee',
  'Ethiopian wolf',
  'Giraffe',
  'Hooded vulture',
  'Mountain gorilla',
  'White rhino'
]
```

### Validering

Se till så koden validerar:

```console
$ cd me
$ npm run linter kmom02/
```



### Hur kan det se ut när det är klart?

Nedan är en video som visar hur det kan se ut när det är klart:

[![js exercise kmom02](https://img.youtube.com/vi/EKFOlAsJDkE/0.jpg)](https://www.youtube.com/watch?v=EKFOlAsJDkE)



### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

<!-- [TBD: Länk till issues](#) -->
