basic.forever(function () {
    if (Microbit.readWaterTemp(Read_pin.r0) >= 28) {
        Microbit.ledRBrightness(DigitalPin.P8, true)
        Microbit.ledBBrightness(DigitalPin.P12, false)
        Microbit.ledGBrightness(DigitalPin.P16, false)
    } else if (Microbit.readWaterTemp(Read_pin.r0) < 25) {
        Microbit.ledRBrightness(DigitalPin.P8, false)
        Microbit.ledBBrightness(DigitalPin.P12, true)
        Microbit.ledGBrightness(DigitalPin.P16, false)
    } else {
        Microbit.ledRBrightness(DigitalPin.P8, false)
        Microbit.ledBBrightness(DigitalPin.P12, false)
        Microbit.ledGBrightness(DigitalPin.P16, true)
    }
    basic.showNumber(Microbit.ReadWaterLevel(Read_pin.r1))
})
