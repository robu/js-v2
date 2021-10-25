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

1. Skapa en fil `kmom02/main.js` som du kan ha för att testa dina moduler.
1. Varje modul du kopierade in ska exportera följande funktioner:

    | Namn        |  Vad ska hända?  |
    | ------------- | :-----|
    | allAnimals()      | Returnera hela arrayen med djur. |
    | getRandomAnimal()   |   Returnera ett slumpmässigt djur från arrayen. |
    | addAnimal(string)  | Lägg till ett nytt djur i listan. |
    | removeAnimal(string) | Ta bort ett djur från listan. Returnera information om det gick bra eller inte. Se nedan för exempel. |

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

    | Namn        | Vad ska hända?  |
    | ------------- |:-----|
    | prettyPrint(string, array) |  Returnera en rapport av alla inskickade djur. Se nedan för exempel. |
    | fixFirstLetter(array)   |   Returnera arrayen där första bokstaven på alla djur är gjord till versal. |
    | sortAnimals(array) | Returnera den inskickade arrayen sorterad alfabetiskt i stigande ordning. Du kan göra skillnad på gemener och versaler. |
    | filterAnimals([array, array...], int) | Returnera en array med alla djur som har färre eller lika många bokstäver (inte tecken) som den inskickade siffran. Se nedan för exempel. |


    **prettyPrint** Om man exekverar prettyPrint med argumenten `African` och en array med alla Afrikas djur, `prettyPrint('African', allAfricanAnimals)` ska man få utskriften:

    ```console
    --- REPORT ---
    African animals

    * Ethiopian wolf
    * Black rhino
    * White rhino
    * Mountain Gorilla
    * African Wild Dog
    * African penguin
    * Giraffe
    * Hooded vulture
    * Chimpanzee
    ```

    Använder man andra argument ska man såklart få en annan utskrift, men i samma format.

    **filterAnimals** Om funktionen exekveras med alla afrikanska och amerikanska djur samt siffran 10, `filterAnimals([allAfricanAnimals, allAmericanAnimals], 10)`, ska resultatet bli:

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



### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

[TBD: Länk till issues](#)
