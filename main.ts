input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(2000)
})
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
