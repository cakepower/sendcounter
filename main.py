def on_button_pressed_a():
    radio.send_value("counter", 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_value("counter", 0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    radio.send_value("counter", -1)
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(33)

def on_forever():
    basic.show_number(input.sound_level())
basic.forever(on_forever)
