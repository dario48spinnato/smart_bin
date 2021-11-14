music.setVolume(127)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
