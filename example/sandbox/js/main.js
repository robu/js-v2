(function () {
    'use strict';

    const myContent = document.getElementById('content');

    myContent.innerHTML = '<h3>This is a template!</h3>';

    myContent.addEventListener('click', function (event) {
        const clickedElement = event.target

        clickedElement.remove();
    })

    window.console.log('Sandbox is ready!');
})();
