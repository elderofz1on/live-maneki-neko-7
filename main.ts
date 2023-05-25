function mover_pata () {
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 140)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 60)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
    basic.pause(500)
}
function mover_pata_suave () {
    for (let grau = 60; grau <= 140; grau++) {
        hackbitmotors.Servo(hackbitmotors.Servos.S8, grau)
        basic.pause(10)
    }
basic.pause(50)
    for (let grau2 = 140; grau2 >= 60; grau2--) {
        hackbitmotors.Servo(hackbitmotors.Servos.S8, grau2)
        basic.pause(10)
    }
basic.pause(50)
}
hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
basic.forever(function () {
    if (input.lightLevel() > 20) {
        mover_pata_suave()
    }
})
