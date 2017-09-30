var playPause = anime({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 500},
        {value: 100, duration: 800},
        {value: 0, duration: 1200}
    ],
  translateX: [
        {value: 200, duration: 500},
        {value: -50, duration: 800},
        {value: 0, duration: 1200}
    ],
    rotate: {
        value: '2turn',
        easing: 'easeInOutSine'
},
  borderRadius: [
    {value: 20, duration: 800},
    {value: 0, duration: 500}
  ],

delay: function(target, index, totalTargets){return index * 1200},
autoplay: true,
loop: true
});

document.querySelector("#boxes .play").onclick = playPause.play;
document.querySelector("#boxes .pause").onclick = playPause.pause;
