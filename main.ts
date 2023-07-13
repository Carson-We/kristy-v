let value = 0
basic.showIcon(IconNames.Asleep)
if (true) {
    Asr.Asr_Clear_Buffer()
    Asr.Asr_Set_Mode(Asr.Mode.password_mode)
    Asr.Asr_Add_Words(0, "KRISTY")
    Asr.Asr_Add_Words(1, "hey KRISTY")
    Asr.Asr_Add_Words(2, "Christy")
    Asr.Asr_Add_Words(3, "Hey Christy")
    Asr.Asr_Add_Words(4, "")
    Asr.Asr_Add_Words(5, "")
    Asr.Asr_Add_Words(6, "")
    Asr.Asr_Add_Words(7, "")
    Asr.Asr_Add_Words(8, "")
}
Asr.Asr_Gain(64)
Asr.Asr_Buzzer(Asr.Buzzer_State.ON)
Asr.Asr_Set_RGB2(Asr.enColor.White)
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    value = Asr.Asr_Result()
    if (value == 5) {
        basic.showIcon(IconNames.Happy)
    } else if (value == 6) {
        basic.showIcon(IconNames.Confused)
    } else if (value == 7) {
        basic.showIcon(IconNames.Heart)
    } else if (value == 8) {
        basic.showIcon(IconNames.Duck)
    }
    basic.pause(500)
})