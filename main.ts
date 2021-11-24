input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(99)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(-1)
})
radio.setGroup(33)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
