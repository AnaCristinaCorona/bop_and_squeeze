let counterPoints = 0
let Total_Points = 0
let Line_xFORTH = 0
let Line_yFORTH = 0
let Line_xBACK = 0
let line_yBACK = 0
input.onButtonPressed(Button.A, function () {
    if (led.point(2, 2)) {
        counterPoints = 100
        music.playTone(988, music.beat(BeatFraction.Whole))
        counterPoints += 0 + counterPoints
    } else if (led.point(1, 2) || led.point(3, 2)) {
        counterPoints = 50
        music.playTone(349, music.beat(BeatFraction.Whole))
        counterPoints += 0 + counterPoints
    } else {
        counterPoints = 0
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showString("LOSE")
    }
    while (input.buttonIsPressed(Button.A)) {
        Total_Points = counterPoints
    }
})
basic.forever(function () {
    Line_xFORTH = 0
    Line_yFORTH = 2
    Line_xBACK = 4
    line_yBACK = 2
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 4; index++) {
            led.plot(Line_xFORTH, Line_yFORTH)
            basic.pause(100)
            led.unplot(Line_xFORTH, Line_yFORTH)
            Line_xFORTH += 1
        }
        for (let index = 0; index <= 4; index++) {
            led.plot(Line_xBACK, line_yBACK)
            basic.pause(100)
            led.unplot(Line_xBACK, line_yBACK)
            Line_xBACK += -1
        }
    }
})
