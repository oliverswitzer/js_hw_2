function Dice () {

}

Dice.prototype.roll = function () {
	var result = Math.round(Math.random()*7)
	return result
}

var dice1 = new Dice

console.log(dice1.roll())