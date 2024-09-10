input.onButtonPressed(Button.A, function () {
    turtle.setPosition(2, 4)
    turtle.pen(TurtlePenMode.Down)
    turtle.forward(4)
    turtle.back(2)
    turtle.turnLeft()
    turtle.forward(2)
    turtle.back(4)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    turtle.setPosition(0, 0)
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index < 4; index++) {
        turtle.turnRight()
        turtle.forward(4)
    }
})
