lowerTl = new TimelineMax();



$("svg a").eq(0).on("click", function(event) {
    $(this).siblings().attr("class", "");
    $(this).attr("class", "active");
    
    lowerTl.to($("#video.pgSection"), 1.25, {opacity: 1});
    lowerTl.to($(["#character.pgSection, #review.pgSection, #about.pgSection"]), 1.25, {opacity: 0}, "-=1"); 
    
    lowerTl.to($("svg a").eq(0).children(), 0.5, {fill: "#004370"}, "-=1.25");
    lowerTl.to($("svg a").eq(1).children(), 0.5, {fill: "#8A56ED"}, "-=1.25");
    lowerTl.to($("svg a").eq(2).children(), 0.5, {fill: "#E882B5"}, "-=1.25");
    lowerTl.to($("svg a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.25")
    
});

$("svg a").eq(1).on("click", function(event) {
    $(this).siblings().attr("class", "");
    $(this).attr("class", "active");
    
    lowerTl.to($("#character.pgSection"), 1.25, {opacity: 1});
    lowerTl.to($(["#video.pgSection, #review.pgSection, #about.pgSection"]), 1.25, {opacity: 0}, "-=1"); 
    
    lowerTl.to($("svg a").eq(0).children(), 0.5, {fill: "#4DAEF7"}, "-=1.25");
    lowerTl.to($("svg a").eq(1).children(), 0.5, {fill: "#280263"}, "-=1.25");
    lowerTl.to($("svg a").eq(2).children(), 0.5, {fill: "#E882B5"}, "-=1.25");
    lowerTl.to($("svg a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.25");
    
});

$("svg a").eq(2).on("click", function(event) {
    $(this).siblings().attr("class", "");
    $(this).attr("class", "active");
    
    lowerTl.to($("#review.pgSection"), 1.25, {opacity: 1});
    lowerTl.to($(["#video.pgSection, #character.pgSection, #about.pgSection"]), 1.25, {opacity: 0}, "-=1");
    
    lowerTl.to($("svg a").eq(0).children(), 0.5, {fill: "#4DAEF7"}, "-=1.25");
    lowerTl.to($("svg a").eq(1).children(), 0.5, {fill: "#8A56ED"}, "-=1.25");
    lowerTl.to($("svg a").eq(2).children(), 0.5, {fill: "#60012C"}, "-=1.25");
    lowerTl.to($("svg a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.25");
    
});

$("svg a").eq(3).on("click", function(event) {
    $(this).siblings().attr("class", "");
    $(this).attr("class", "active");

    lowerTl.to($("#about.pgSection"), 1.25, {opacity: 1});
    lowerTl.to($(["#video.pgSection, #review.pgSection, #character.pgSection"]), 1.25, {opacity: 0}, "-=1"); 
    
    lowerTl.to($("svg a").eq(0).children(), 0.5, {fill: "#4DAEF7"}, "-=1.25");
    lowerTl.to($("svg a").eq(1).children(), 0.5, {fill: "#8A56ED"}, "-=1.25");
    lowerTl.to($("svg a").eq(2).children(), 0.5, {fill: "#E882B5"}, "-=1.25");
    lowerTl.to($("svg a").eq(3).children(), 0.5, {fill: "#1F2804"}, "-=1.25");
    
});



// THIS WORKS FOR SVG ELEMENTS //
// Instead of .addClass("newclass")
/*$("#item").attr("class", "newclass");*/
// Instead of .removeClass("newclass")
/*$("#item").attr("class", "oldclass");*/





