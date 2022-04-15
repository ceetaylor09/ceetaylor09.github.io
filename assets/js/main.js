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


sLightTl.to([$skyupright, $skybelow, $skyward, $backFrontLights, $frontLight2, $smokeclouds], 1, {opacity: 0})
        
        .to($fpilogo, 1, {opacity: 1})
        .fromTo($logoBg, 1, {opacity: 0, scale: 0, transformOrigin: "50% 50%"}, {opacity: 1, scale: 1, ease: Back.easeOut});




/* MAIN MENU BUTTONS */

lowerTl = new TimelineMax();

$("#menuButtons a").eq(0).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "active").css("cursor", "default");
    
    lowerTl.to($("#video.pgSection"), 1.25, {opacity: 1});
    lowerTl.to($(["#character.pgSection, #review.pgSection, #about.pgSection"]), 1.25, {opacity: 0}, "-=1"); 
    
    lowerTl.to($("#menuButtons a").eq(0).children(), 0.5, {fill: "#004370"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(1).children(), 0.5, {fill: "#8A56ED"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(2).children(), 0.5, {fill: "#E882B5"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.25");
    
});


$("#menuButtons a").eq(1).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "active").css("cursor", "default");
   
    
    lowerTl.to($("#character.pgSection"), 1.25, {opacity: 1});
    lowerTl.to($(["#video.pgSection, #review.pgSection, #about.pgSection"]), 1.25, {opacity: 0}, "-=1"); 
    
    lowerTl.to($("#menuButtons a").eq(0).children(), 0.5, {fill: "#4DAEF7"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(1).children(), 0.5, {fill: "#280263"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(2).children(), 0.5, {fill: "#E882B5"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.25");

});


$("#menuButtons a").eq(2).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "active").css("cursor", "default");
    
    lowerTl.to($("#review.pgSection"), 1.25, {opacity: 1});
    lowerTl.to($(["#video.pgSection, #character.pgSection, #about.pgSection"]), 1.25, {opacity: 0}, "-=1");
    
    lowerTl.to($("#menuButtons a").eq(0).children(), 0.5, {fill: "#4DAEF7"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(1).children(), 0.5, {fill: "#8A56ED"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(2).children(), 0.5, {fill: "#60012C"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.25");
    
});

$("#menuButtons a").eq(3).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "active").css("cursor", "default");

    lowerTl.to($("#about.pgSection"), 1.25, {opacity: 1});
    lowerTl.to($(["#video.pgSection, #review.pgSection, #character.pgSection"]), 1.25, {opacity: 0}, "-=1"); 
    
    lowerTl.to($("#menuButtons a").eq(0).children(), 0.5, {fill: "#4DAEF7"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(1).children(), 0.5, {fill: "#8A56ED"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(2).children(), 0.5, {fill: "#E882B5"}, "-=1.25");
    lowerTl.to($("#menuButtons a").eq(3).children(), 0.5, {fill: "#9CAF7D"}, "-=1.25");
    
});


/* CHARACTER MENU BUTTONS*/

charTl = new TimelineMax(); 


$("#charMenu a").eq(0).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");
    
    charTl.to($("#alicia.photos, #alicia-copy"), 1, {opacity: 1});
    charTl.to($(["#ty.photos, #ty-copy, #sid.photos, #sid-copy, #cara.photos, #cara-copy, #devin.photos, #devin-copy"]), 1, {opacity: 0}, "-=1");
    
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    
});

$("#charMenu a").eq(1).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");
    
    
    charTl.to($("#ty.photos, #ty-copy"), 1, {opacity: 1});
    charTl.to($(["#alicia.photos, #alicia-copy, #sid.photos, #sid-copy, #cara.photos, #cara-copy, #devin.photos, #devin-copy"]), 1, {opacity: 0}, "-=1"); 
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    
});

$("#charMenu a").eq(2).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");

    charTl.to($("#sid.photos, #sid-copy"), 1, {opacity: 1});
    charTl.to($(["#alicia.photos, #alicia-copy, #ty.photos, #ty-copy, #cara.photos, #cara-copy, #devin.photos, #devin-copy"]), 1, {opacity: 0}, "-=1");
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    
});

$("#charMenu a").eq(3).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");; 
    
    charTl.to($("#cara.photos, #cara-copy"), 1, {opacity: 1});
    charTl.to($(["#alicia.photos, #alicia-copy, #ty.photos, #ty-copy, #sid.photos, #sid-copy, #devin.photos, #devin-copy"]), 1, {opacity: 0}, "-=1");
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    
});

$("#charMenu a").eq(4).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default"); 
    
    charTl.to($("#devin.photos, #devin-copy"), 1, {opacity: 1});
    charTl.to($(["#alicia.photos, #alicia-copy, #ty.photos, #ty-copy, #sid.photos, #sid-copy, #cara.photos, #cara-copy"]), 1, {opacity: 0}, "-=1");
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 1}, "-=1.25");
    
});
