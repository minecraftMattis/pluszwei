let ZAL = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    ZAL = ZAL + 2
})
basic.forever(function () {
    basic.showNumber(ZAL)
})
