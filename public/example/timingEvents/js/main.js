(function () {
    'use strict';

    const myContent = document.getElementById('content');
    const colors = ['#D6D4D3', '#E1D6D0', '#F1DDD2'];
    let counter = 0;

    myContent.innerHTML = '<h3>This is a template!</h3>';

    const changeColor = setInterval(function () {
        myContent.style.backgroundColor = colors[++counter % colors.length];
    }, 500);

    setTimeout(function () {
        myContent.innerHTML = `
        <h3>You will see this after 3 seconds.
        The interval is also cleared.</h3>`;
        clearInterval(changeColor);
    }, 3000);

    window.console.log('Sandbox is ready!');
})();
