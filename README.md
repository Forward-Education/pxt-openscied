# openscied

This extension supports OpenSciEd Jacdac hardware modules. They are available for purchase as kits at [](). The learning experience is supported as part of the [OpenSciEd curriculum](https://openscied.org/curriculum/).

### ~ reminder

![works with micro:bit V2 only image](/static/v2/v2-only.png)

These blocks require the [micro:bit V2](/device/v2). If you use them with a V1 micro:bit you will see the 927 error code on the screen.

### ~

## Example Usage

Let's look at the weight module (weight scale). In order for accurate results, the scale should be tared (button A) and then calibrated. Taring means setting the scale to 0. In our case we want to set it to 0 when there is nothing on it. Then we can put a known weight on the scale to do the second calibration point (button B). With our calibrated scale we can play a game. Every 5 seconds the scale measurement is noted. If it's over 50g then a spring noise is played. So two people can take turns adding things to the scale and whoever sets off the spring loses.

```blocks
input.onButtonPressed(Button.A, function () {
    opensciedModules.weight1.tare()
})
input.onButtonPressed(Button.B, function () {
    opensciedModules.weight1.calibrate(100)
})
loops.everyInterval(5000, function () {
    basic.showNumber(opensciedModules.weight1.weight())
    if (opensciedModules.weight1.isPastThreshold(50, opensciedEnums.OverUnder.Over)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
    }
})
```

In this next example we use 4 environmental sensors and an LCD screen to read their measurements. While not essential, it's a good practice to use the initialize LCD block in on start when using the LCD module. Since the LCD screen has 2 rows of 16 characters it can be divided into 4 quadrants of 8 characters. Since we have 4 sensors we can show each measurement in it's own quadrant, refreshing the value every half second. Using the rounding block gives control over the decimal places. This can be important to stay within the 8 character limit.

```blocks
opensciedModules.initializeLcd()
loops.everyInterval(500, function () {
    opensciedModules.lcd1.printQuadrantNumber(opensciedModules.round(opensciedModules.bmeTemperature.temperature(), 0), 1)
    opensciedModules.lcd1.printQuadrantNumber(opensciedModules.round(opensciedModules.bmeHumidity.humidity(), 0), 2)
    opensciedModules.lcd1.printQuadrantNumber(opensciedModules.round(opensciedModules.bmeAirPressure.pressure(), 0), 3)
    opensciedModules.lcd1.printQuadrantNumber(opensciedModules.round(opensciedModules.light1.illuminance(), 0), 4)
})
```
