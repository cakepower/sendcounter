input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendValue("counter", 1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendValue("counter", 0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendValue("counter", -1)
})
radio.setGroup(33)
basic.forever(function on_forever() {
    
})
