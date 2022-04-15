var highest = 4;

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
    lowerTl.to($("#menuButtons a").eq(3).children(), 0.5, {fill: "#C1D12C"}, "-=1.25")
    
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
    
    lowerTl.to($("#menuButtons a").eq(0).children(), 0.5, {y: -50, opacity: 0}, "-=0.75")
    /*lowerTl.to($("#menuButtons a").eq(1).children(), 0.5, {opacity: 0}, "-=0.75")*/
    lowerTl.to($("#menuButtons a").eq(2).children(), 0.5, {y: -50, opacity: 0}, "-=0.75")
    lowerTl.to($("#menuButtons a").eq(3).children(), 0.5, {y: -50, opacity: 0}, "-=0.75");
    
    lowerTl.to($("#charButtons"), 0.25, {zIndex: highest++});
    lowerTl.to($("#goToButton"), 0.25, {opacity: 1}, "-=0.5");

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
    
    charTl.to($("#alicia.photos"), 1, {opacity: 1});
    charTl.to($(["#ty.photos, #sid.photos, #cara.photos, #devin.photos"]), 1, {opacity: 0}, "-=1");
    
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(5).children(), 0.5, {opacity: 0.75}, "-=1.25");
    
});

$("#charMenu a").eq(1).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");
    
    
    charTl.to($("#ty.photos"), 1, {opacity: 1});
    charTl.to($(["#alicia.photos, #sid.photos, #cara.photos, #devin.photos"]), 1, {opacity: 0}, "-=1"); 
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(5).children(), 0.5, {opacity: 0.75}, "-=1.25");
    
});

$("#charMenu a").eq(2).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");

    charTl.to($("#sid.photos"), 1, {opacity: 1});
    charTl.to($(["#alicia.photos, #ty.photos, #cara.photos, #devin.photos"]), 1, {opacity: 0}, "-=1");
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(5).children(), 0.5, {opacity: 0.75}, "-=1.25");
    
});

$("#charMenu a").eq(3).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");; 
    
    charTl.to($("#cara.photos"), 1, {opacity: 1});
    charTl.to($(["#alicia.photos, #ty.photos, #sid.photos, #devin.photos"]), 1, {opacity: 0}, "-=1");
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(5).children(), 0.5, {opacity: 0.75}, "-=1.25");
    
});

$("#charMenu a").eq(4).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default"); 
    
    charTl.to($("#devin.photos"), 1, {opacity: 1});
    charTl.to($(["#alicia.photos, #ty.photos, #sid.photos, #cara.photos"]), 1, {opacity: 0}, "-=1");
    
    charTl.to($("#charMenu a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu a").eq(4).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu a").eq(5).children(), 0.5, {opacity: 0.75}, "-=1.25");
    
});

$("#goToButton").on("click", function(event) {
    $(this).css("cursor", "default");
  
    charTl.to($("#menu"), 0.25, {zIndex: highest++});
    
    charTl.to($("#menuButtons a").eq(0).children(), 0.5, {y: 0, opacity: 1})
  /*lowerTl.to($("#menuButtons a").eq(1).children(), 0.5, {opacity: 0}, "-=0.75")*/
    charTl.to($("#menuButtons a").eq(2).children(), 0.5, {y: 0, opacity: 1}, "-=0.5")
    charTl.to($("#menuButtons a").eq(3).children(), 0.5, {y: 0, opacity: 1}, "-=0.5");
   
    charTl.to($("#goToButton"), 0.25, {opacity: 0.75}, "-=0.25");
});


// THIS WORKS FOR SVG ELEMENTS //
// Instead of .addClass("newclass")
/*$("#item").attr("class", "newclass");*/
// Instead of .removeClass("newclass")
/*$("#item").attr("class", "oldclass");*/





