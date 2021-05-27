# Uppgift - "Modules"

I den här uppgiften ska du skapa ett par moduler som exporterar fördefinierad funktionalitet.

Du jobbar i mappen `kmom02/`.



### Förutsättning

Det förutsätts att du gått igenom artiklarna för [kursmoment 02](../../articles/kmom02).



### Intro

Efter ditt jobb med glaciärerna är dina kunskaper efterfrågade i andra sammanhang. Organisationen "Hållbara djur" vill att du hjälper dem med dokumentationen av utrotningshotade djur. De vill ha en uppsättning av något som tydligen kallas "ES moduler".

Den data du kan få är listor på några utrotningshotade djur i olika platser på jorden. Du hittar tre filer i exempelmappen som du börjar med att kopiera in i arbetsmappen:

```console
$ cd me
$ cp example/kmom02/*.mjs kmom02/
```



### Krav

1. Skapa en fil `kmom02/main.js` som du kan ha för att testa dina moduler.
1. Varje modul du kopierade in ska exportera följande funktioner:

    | Namn        | Argument           | Vad ska hända?  |
    | ------------- |:-------------:| :-----|
    | allAnimals      | None | Returnera hela arrayen med djur. |
    | getRandomAnimal      | None      |   Returnera ett slumpmässigt djur från arrayen. |
    | addAnimal | &lt;string&gt;      | Lägg till ett nytt djur i listan. |
    | removeAnimal | &lt;string&gt; | Ta bort ett djur från listan. Returnera information om det gick bra eller inte. Se nedan för exempel. |

    Om man försöker ta bort `Monarch butterfly` från de amerikanska djuren ska det skrivas ut:
    ```console
    Removed: Monarch butterfly
    ```
    Om man istället försöker ta bort `King Kong` från någon lista ska det skrivas ut:
    ```console
    No "King Kong" in array.
    ```

1. Skapa en ny modul: `report.mjs` som ska exportera följande funktioner:
    | Namn        | Argument           | Vad ska hända?  |
    | ------------- |:-------------:| -----:|
    | prettyPrint | &lt;string&gt;, &lt;array&gt; | Skriv ut en rapport av alla inskickade djur. Se nedan för exempel. |
    | fixFirstLetter      | &lt;array&gt;      |   Returnera arrayen där första bokstaven är gjord till versal. |
    | sortAnimals | &lt;array&gt;, &lt;string&gt; | Returnera den inskickade arrayen sorterad alfabetiskt i stigande ordning. |

    Om man exekverar prettyPrint med argumenten `African` och en array med alla Afrikas djur, `prettyPrint('African', allAfricanAnimals)` ska man få utskriften:

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
    * african pig
    ```

    Använder man andra argument ska man såklart få en annan utskrift, men i samma format.



### Extra uppgift (Optionell)

Det finns ingen extrauppgift.



### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

[TBD: Länk till issues](#)
