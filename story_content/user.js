function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64ZUAJCyPDT":
        Script1();
        break;
      case "5vKx2923cko":
        Script2();
        break;
      case "6hHBRcZ3ZRc":
        Script3();
        break;
      case "5lG9bY59Oau":
        Script4();
        break;
  }
}

function Script1()
{
  if (!window.bgMusic) {
    window.bgMusic = new Audio("musik3.mp3");
    window.bgMusic.loop = true;
    window.bgMusic.volume = 0.1; // volume awal (0.0 - 1.0)
    window.bgMusic.play();
}
}

function Script2()
{
  if (!window.audioSystem) {

    window.audioSystem = {
        track: null,
        volume: 0.1,
        isMuted: false
    };

    window.startMusic = function() {

        if (!window.audioSystem.track) {

            var audio = new Audio("musik1.mp3");
            audio.loop = true;
            audio.volume = window.audioSystem.volume;
            audio.preload = "auto";

            audio.play().catch(function(e){
                console.log("Autoplay blocked until user interaction");
            });

            window.audioSystem.track = audio;
        }
    };

    window.fadeOutMusic = function() {
        var track = window.audioSystem.track;
        if (!track) return;

        var fade = setInterval(function() {
            if (track.volume > 0.05) {
                track.volume -= 0.05;
            } else {
                clearInterval(fade);
                track.pause();
            }
        }, 100);
    };

    window.fadeInMusic = function() {
        var track = window.audioSystem.track;
        if (!track) return;

        track.play();

        var fade = setInterval(function() {
            if (track.volume < window.audioSystem.volume) {
                track.volume += 0.05;
            } else {
                clearInterval(fade);
            }
        }, 100);
    };

    window.toggleMute = function() {
        var track = window.audioSystem.track;
        if (!track) return;

        window.audioSystem.isMuted = !window.audioSystem.isMuted;
        track.muted = window.audioSystem.isMuted;
    };
}
}

function Script3()
{
  if (window.bgMusic) {
    window.bgMusic.pause();
}
}

function Script4()
{
  if (window.bgMusic) {
    window.bgMusic.pause();
}
}

