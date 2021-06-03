(function () {
  'use strict'
  const boxes = document.querySelectorAll(".box")

  for (let i = 0; i < boxes.length; i++) {
    const el = document.createElement("div")

    el.className = "box"
    document.body.appendChild(el)

    boxes[i].style.backgroundColor = "#503899"
    boxes[i].style.margin = "5px"
  }

  console.log(boxes)

  window.console.log('Sandbox is ready!')
})()
