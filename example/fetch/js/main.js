(function () {
  'use strict'

  const myContent = document.getElementById('content')

  myContent.innerHTML = '<h3>This is a template!</h3>'

  // fetch('https://api.carbonintensity.org.uk/intensity/factors/')
  //     .then(response => response.json())
  //     .then(json => console.log(json.data[0]))

  fetch('data/staff.json', {mode: 'no-cors'})
      .then(response => response.json())
      .then(json => console.log(json))

// https://carbonintensity.org.uk/
  window.console.log('Sandbox is ready!')
})()
