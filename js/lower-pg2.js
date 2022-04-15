/* ONLY FOR ANIMATED CLIP PATHS / MASKS NOT DONE IN FIREFOX */

lower2Tl = new TimelineMax();

    
$("svg a").eq(0).on("click", function(event) {
    
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "active").css("cursor", "default");
    
    $("#video").siblings().attr("class", "lastActive2");
    $("#video").attr("class", "active2");
        
    lower2Tl.set($(".menuCircle4"), {attr: {cx: 660, cy: -190}});
    lower2Tl.to($(".menuCircle4"), 1.5, {attr: {cx: 715.1, cy: 559.5}, ease: Power1.easeOut});
    lower2Tl.to($([".menuCircle1, .menuCircle2, .menuCircle3"]), 0.125, {attr: {cx: 660, cy: -190}});    
    
    lower2Tl.to($("svg a").eq(0).children(), 0.5, {fill: "#004370"}, "-=1.25");
    lower2Tl.to($("svg a").eq(1).children(), 0.5, {fill: "#8A56ED"}, "-=1.25");
    lower2Tl.to($("svg a").eq(2).children(), 0.5, {fill: "#E882B5"}, "-=1.25");
    lower2Tl.to($("svg a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.25")
    
});





$("svg a").eq(1).on("click", function(event) {
    
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "active").css("cursor", "default"); 

    $("#character").siblings().attr("class", "lastActive2");
    $("#character").attr("class", "active2");
    
    lower2Tl.set($(".menuCircle3"), {attr: {cx: 660, cy: -190}});
    lower2Tl.to($(".menuCircle3"), 1.5, {attr: {cx: 715.1, cy: 559.5}, ease: Power1.easeOut});
    lower2Tl.to($([".menuCircle1, .menuCircle2, .menuCircle4"]), 0.125, {attr: {cx: 660, cy: -190}}); 
    
    lower2Tl.to($("svg a").eq(0).children(), 0.5, {fill: "#4DAEF7"}, "-=1.5");
    lower2Tl.to($("svg a").eq(1).children(), 0.5, {fill: "#280263"}, "-=1.5");
    lower2Tl.to($("svg a").eq(2).children(), 0.5, {fill: "#E882B5"}, "-=1.5");
    lower2Tl.to($("svg a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.5");

});


$("svg a").eq(2).on("click", function(event) {
    
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "active").css("cursor", "default");
    
    $("#review").siblings().attr("class", "lastActive2");
    $("#review").attr("class", "active2");
    
    lower2Tl.set($(".menuCircle2"), {attr: {cx: 660, cy: -190}});
    lower2Tl.to($(".menuCircle2"), 1.5, {attr: {cx: 715.1, cy: 559.5}, ease: Power1.easeOut});
    lower2Tl.to($([".menuCircle1, .menuCircle3, .menuCircle4"]), 0.125, {attr: {cx: 660, cy: -190}});
    
    lower2Tl.to($("svg a").eq(0).children(), 0.5, {fill: "#4DAEF7"}, "-=1.5");
    lower2Tl.to($("svg a").eq(1).children(), 0.5, {fill: "#8A56ED"}, "-=1.5");
    lower2Tl.to($("svg a").eq(2).children(), 0.5, {fill: "#60012C"}, "-=1.5");
    lower2Tl.to($("svg a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.5");
    
});
    


$("svg a").eq(3).on("click", function(event) {
    
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "active").css("cursor", "default");
    
    $("#about").siblings().attr("class", "lastActive2");
    $("#about").attr("class", "active2");
    
    lower2Tl.set($(".menuCircle1"), {attr: {cx: 660, cy: -190}});
    lower2Tl.to($(".menuCircle1"), 1.5, {attr: {cx: 715.1, cy: 559.5}, ease: Power1.easeOut});
    lower2Tl.to($([".menuCircle2, .menuCircle3, .menuCircle4"]), 0.125, {attr: {cx: 660, cy: -190}});
    
    lower2Tl.to($("svg a").eq(0).children(), 0.5, {fill: "#4DAEF7"}, "-=1.5");
    lower2Tl.to($("svg a").eq(1).children(), 0.5, {fill: "#8A56ED"}, "-=1.5");
    lower2Tl.to($("svg a").eq(2).children(), 0.5, {fill: "#E882B5"}, "-=1.5");
    lower2Tl.to($("svg a").eq(3).children(), 0.5, {fill: "#9CAF7D"}, "-=1.5");
    lower2Tl.to($("svg a").eq(3).children().find("#four-word"), 0.5, {fill: "#1F2804"}, "-=1.5");
    
});
    


