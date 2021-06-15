Radera element
==================================

För att radera element använder vi funktionen `Node.removeChild()`. Node i detta faller är föräldern till elementet som ska tas bort. Vi tittar på ett exempel där vi tar bort det elementet vi klickar på.

Vi utgår ifrån vår [sandbox](../../example/sandbox).

```js
const myContent = document.getElementById('content')

myContent.innerHTML = '<h3>This is a template!</h3>'

myContent.addEventListener('click', function () {
    const clickedElement = event.target

    clickedElement.parentNode.removeChild(clickedElement)
})
```

Vi skapar alltså ett klick-event där vi traverserar i domträdet ett steg upp till det klickade elementets förälder och använder funktionen för att ta bort dess barn. Vi hade även kunnat skicka med `this` istället för `clickedElement`, vilket hade resulterat i samma sak. Vi kommer prata mer om *this* senare i kursen.
