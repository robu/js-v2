const myContent = document.getElementsByClassName('content')[0]

for (let i = 0; i < 5; i++) {
  const box = document.createElement("div")

  box.className = "box"

  myContent.appendChild(box)
}
