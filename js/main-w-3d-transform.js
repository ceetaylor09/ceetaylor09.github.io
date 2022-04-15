function getRandomInt(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

tl1 = new TimelineMax();
cloudsTl = new TimelineMax();
sLightTl = new TimelineMax();
piecesTl = new TimelineMax({delay: 10});


var $smoke1 = $("#smoke1"),
    $smoke2 = $("#smoke2"),
    $smoke3 = $("#smoke3"),
    $smoke4 = $("#smoke4"),
    $smoke5 = $("#smoke5"),
    $smoke6 = $("#smoke6"),
    $smoke7 = $("#smoke7"),
    $smokeclouds = $("#smokeClouds"),
    $skycircle = $("#skyCircle"),
    $fpilight = $("#fpiLight"),
    $skyupright = $("#skyUpright"),
    $skyward = $("#skyward"),
    $skybelow = $("#skyBelow"),
    $backFrontLights = $("#backlight, #frontlight"),
    $frontLight2 = $("#frontlight2"),
    $puzzPieces = $("path.puzzle"),
    $fLetterUpright = $("#f-upright"),
    $pLetterUpright = $("#p-upright"),
    $iLetterUpright = $("#i-upright"),
    $fpilogo = $("#fpiLogo"),
    $logoBg = $("#logo-bg");


$puzzPieces.each(function(index, element) {
  piecesTl.fromTo(element, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, index * 0.175);
});


tl1.to($smokeclouds, 1.25, {opacity: 0.65}, "start");


cloudsTl.fromTo($smoke1, 95, {x:-70}, {x:80}, 0)
        .fromTo($smoke2, 95, {x:86}, {x:-98}, 0)
        .fromTo($smoke3, 95, {x:-60}, {x:70}, 0)
        .fromTo($smoke4, 95, {x:60}, {x:-70}, 0)
        .fromTo($smoke5, 95, {x:-106}, {x:80}, 0)
        .fromTo($smoke6, 95, {x:-70}, {x:90}, 0)
        .fromTo($smoke7, 95, {x:10}, {x:-80}, 0);
cloudsTl.timeScale(4);
   

sLightTl.set($skyupright, {scale: 0.95, x: 57.5, y: -72, rotation: -2.5, skewX: 68, transformOrigin: "260px 140px"});
sLightTl.set($skybelow, {scale: 0.95, x: 79, y: -52, rotation: -3, skewX: 68, transformOrigin: "260px 140px"});


sLightTl.to($fpilight, 0.75, {opacity: 1}, +1.5)
        .fromTo($fpilight, 1.5, {rotation: -25, x:-160, y: 5, scale: 1.25, transformOrigin: "260px 162px"}, {rotation: 15, x:245, repeat: 3, yoyo:true, ease:Power1.easeInOut})
        .fromTo($fpilight, 1.5, {rotation: -25, x:-160, y: 5, scale: 1.25, ease: Power1.easeInOut}, {scale: 1.10, rotation: 0, x: -2, y: 35, ease: Power1.easeInOut});

sLightTl.set($skyupright, {transformPerspective: 600})
        .to($skyupright, 1, {rotationX: -45, rotation: 0, skewX: 0, x: 0, y: 0, transformOrigin: "260px 140px", ease: Power1.easeOut})
        .to([$skybelow, $skyward, $backFrontLights, $frontLight2, $smokeclouds], 1, {opacity: 0})
        .to([$fLetterUpright, $pLetterUpright, $iLetterUpright], 1, {opacity: 1, fill: "#231F20"}, "moveLetter")
        .to($fLetterUpright, 1, {scale: 0.7, scaleY: 0.875, rotation: -5, x: 25, y: 11}, "moveLetter")
        .to($pLetterUpright, 1, {scale: 0.7, scaleY: 0.875, rotation: -4.5, x: -7, y: -1}, "moveLetter")
        .to($iLetterUpright, 1, {scale: 0.7, scaleY: 0.875, rotation: -4.5, x: -37, y: -13}, "moveLetter")
        .to($fpilogo, 1, {opacity: 1})
        .fromTo($logoBg, 1, {opacity: 0, scale: 0, transformOrigin: "50% 50%"}, {opacity: 1, scale: 1, ease: Back.easeOut});

