var playPause = anime({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 500},
        {value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
},
delay: function(target, index, totalTargets){return index * 1000},
autoplay: false,
loop: true
});

document.querySelector("#boxes .play").onclick = playPause.play;
document.querySelector("#boxes .pause").onclick = playPause.pause;
