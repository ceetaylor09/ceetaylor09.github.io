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








