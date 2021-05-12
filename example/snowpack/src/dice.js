function Dice (sides) {
  this.sides = sides
  this.print = function () {
    return 'this dice has : ' + this.sides + ' sides'
  }
}

module.exports = Dice
