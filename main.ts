basic.forever(function () {
    if (10 < grove.measureInCentimetersV2(DigitalPin.P0)) {
        basic.showString("high")
    } else {
        basic.showString("low")
    }
})
