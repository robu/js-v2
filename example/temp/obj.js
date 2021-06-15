const obj1 = Object.create(myObj)
const obj2 = Object.create(myObj)
const obj3 = Object.create(myObj)

obj1.init(25, 54, "green")
obj2.init(100, 250, "red")
obj3.init(65, 147, "yellow")

const allObjects = [obj1, obj2, obj3]

for (let i = 0; i < allObjects.length; i++) {
  allObjects[i].draw()
}
