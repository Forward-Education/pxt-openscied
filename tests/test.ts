// BME280 Tests
// Type: compilation
//  pressure(): number
//  bmeHumidity(): number
//  bmeTemperature(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.bmeAirPressure.isPastThreshold(
    opensciedModules.bmeAirPressure.pressure(),
    opensciedEnums.OverUnder.Over,
)

opensciedModules.bmeHumidity.isPastThreshold(
    opensciedModules.bmeHumidity.humidity(),
    opensciedEnums.OverUnder.Over,
)

opensciedModules.bmeTemperature.isPastThreshold(
    opensciedModules.bmeTemperature.temperature(),
    opensciedEnums.OverUnder.Over,
)

// Dial Tests
// Type: compilation
//  position()
//  onRotated(direction: DialDirection, handler: () => void): void
opensciedModules.dial1.onRotated(
    opensciedEnums.ClockwiseCounterclockwise.Clockwise,
    () =>
        console.log("turned -> position " + opensciedModules.dial1.position()),
)

// Dial Button tests
// Type: compilation
//  onEvent(event: jacdac.ButtonEvent, handler: () => void)
//  holdDuration(): number
//  isPressed(): boolean
console.log("Button pressed? " + opensciedModules.dialButton1.isPressed())
opensciedModules.dialButton1.onEvent(jacdac.ButtonEvent.Hold, () =>
    console.log(
        "Hold Duration: " + opensciedModules.dialButton1.holdDuration(),
    ),
)

// eCO2 Tests
// Type: compilation
//  eco2(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.eCO2.isPastThreshold(
    opensciedModules.eCO2.eco2(),
    opensciedEnums.OverUnder.Over,
)

// tVOC Tests
// Type: compilation
//  tvoc(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.tVOC.isPastThreshold(
    opensciedModules.tVOC.tvoc(),
    opensciedEnums.OverUnder.Over,
)

// Flex Tests
// Type: compilation
//  flex(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.flex1.isPastThreshold(
    opensciedModules.flex1.flex(),
    opensciedEnums.OverUnder.Over,
)

// LCD Tests
// Type: compilation
//  initializeLcd()
//  round(number_: number, decimals: number)
//  printLineString(string_: string, line: number)
//  printQuadrantString(string_: string, quadrant: number)
//  printLineNumber(number_: number, line: number)
//  printQuadrantNumber(number_: number, quadrant: number)
//  clearScreen()
opensciedModules.initializeLcd()
opensciedModules.lcd1.printLineString("Hello", 0)
opensciedModules.lcd1.printQuadrantString("World", 2)
opensciedModules.lcd1.printLineNumber(123, 1)
opensciedModules.lcd1.printQuadrantNumber(opensciedModules.round(456, 3), 3)
opensciedModules.lcd1.clearScreen()

// Light Tests
// Type: compilation
//  illuminance(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.light1.isPastThreshold(
    opensciedModules.light1.illuminance(),
    opensciedEnums.OverUnder.Over,
)

// Moisture Sensor Tests
// Type: compilation
//  moistureLevel(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.moisture1.isPastThreshold(
    opensciedModules.moisture1.moistureLevel(),
    opensciedEnums.OverUnder.Over,
)

// Pressure Tests
// Type: compilation
//  pressure(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.pressure1.isPastThreshold(
    opensciedModules.pressure1.pressure(),
    opensciedEnums.OverUnder.Over,
)

// Pump Tests
// Type: compilation
//  isOn(): boolean
//  setOn(on: boolean): void
//  timedRun(duration: number): void
//  setOn() is used in timedRun, so it is covered by timedRun() test
opensciedModules.pump.isOn()
opensciedModules.pump.timedRun(3)

// Continuous Servo Tests
// Type: compilation
//  setSpeed(servo: opensciedBase.OpensciedServoClient, speed: number): void
//  speed(servo: opensciedBase.OpensciedServoClient): number
//  setupDriving(left: opensciedBase.OpensciedServoClient, right: opensciedBase.OpensciedServoClient)
//  function drive(leftSpeed: number, rightSpeed: number, duration: number)
opensciedModules.setSpeed(opensciedBase.leftServo, 0)
basic.showNumber(opensciedModules.speed(opensciedBase.leftServo))
opensciedModules.setupDriving(opensciedBase.leftServo, opensciedBase.leftServo)
opensciedModules.drive(50, 50, 2)

// Positional Servo Tests
// Type: compilation
// setAngleAndWait() doesn't work in the simulator, but does with physical hardware.
// The "ADD SIMULATORS" button will add a 180 servo instead of a 270
//  setAngle(servo: opensciedBase.OpensciedServoClient, angle: number): void
//  angle(servo: opensciedBase.OpensciedServoClient): number
opensciedModules.setAngle(opensciedBase.leftServo, 90)
opensciedModules.angle(opensciedBase.leftServo)

// Slider Tests
// Type: compilation
//  position(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.pressure1.isPastThreshold(
    opensciedModules.pressure1.pressure(),
    opensciedEnums.OverUnder.Over,
)

// Solar Sensor Tests
// Type: compilation
//  lightLevel(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.solar1.isPastThreshold(
    opensciedModules.solar1.lightLevel(),
    opensciedEnums.OverUnder.Over,
)

// Temperature Sensor Tests
// Type: compilation
//  temperature(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
opensciedModules.temperature1.isPastThreshold(
    opensciedModules.temperature1.temperature(),
    opensciedEnums.OverUnder.Over,
)

// Weight Tests
// Type: compilation
//  weight(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
//  tare(): void
//  calibrate(calibrationWeight: number): void
opensciedModules.weight1.isPastThreshold(
    opensciedModules.weight1.weight(),
    opensciedEnums.OverUnder.Over,
)
opensciedModules.weight1.tare()
opensciedModules.weight1.calibrate(100)
