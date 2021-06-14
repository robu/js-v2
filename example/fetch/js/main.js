(function () {
  'use strict'

  // const myContent = document.getElementById('content')
  const staffTable = document.getElementById('staffTable')

  // myContent.innerHTML = '<h3>This is a template!</h3>'

  // fetch('https://api.carbonintensity.org.uk/intensity/factors/')
  //     .then(response => response.json())
  //     .then(json => console.log(json.data[0]))

  fetch('https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/fetch/data/staff.json')
    .then(response => response.json())
    .then(function (json) {
      staffTable.innerHTML = `<thead><tr><th>Firstname</th><th>Lastname</th></tr></thead>`
      staffTable.innerHTML += `<tbody>`
      for (const teacher of json) {
        staffTable.innerHTML += `
                <tr>
                    <td>${teacher.firstname}</td>
                    <td>${teacher.lastname}</td>
                </tr>`
      }
      staffTable.innerHTML += `</tbody>`

    })

  // https://carbonintensity.org.uk/
  window.console.log('Sandbox is ready!')
})()
