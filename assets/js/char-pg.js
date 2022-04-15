/* CHARACTER MENU BUTTONS*/

charTl = new TimelineMax();

$("#charMenu2 a").eq(0).on("click", function(event) {
    event.preventDefault();
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");
    
    charTl.to($("#alicia2.photos2"), 1.25, {opacity: 1});
    charTl.to($(["#ty2.photos2, #sid2.photos2, #cara2.photos2, #devin2.photos2"]), 1.25, {opacity: 0}, "-=1"); 
    
    charTl.to($("#charMenu2 a").eq(0).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    
});

$("#charMenu2 a").eq(1).on("click", function(event) {
    event.preventDefault();
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");
    
    
    charTl.to($("#ty2.photos2"), 1.25, {opacity: 1});
    charTl.to($(["#alicia2.photos2, #sid2.photos2, #cara2.photos2, #devin2.photos2"]), 1.25, {opacity: 0}, "-=1"); 
    
    charTl.to($("#charMenu2 a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(1).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    
});

$("#charMenu2 a").eq(2).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");

    charTl.to($("#sid2.photos2"), 1.25, {opacity: 1});
    charTl.to($(["#alicia2.photos2, #ty2.photos2, #cara2.photos2, #devin2.photos2"]), 1.25, {opacity: 0}, "-=1");
    
    charTl.to($("#charMenu2 a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(2).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    
});

$("#charMenu2 a").eq(3).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default");; 
    
    charTl.to($("#cara2.photos2"), 1.25, {opacity: 1});
    charTl.to($(["#alicia2.photos2, #ty2.photos2, #sid2.photos2, #devin2.photos2"]), 1.25, {opacity: 0}, "-=1");
    
    charTl.to($("#charMenu2 a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(3).children(), 0.5, {opacity: 1}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(4).children(), 0.5, {opacity: 0.5}, "-=1.25");
    
});

$("#charMenu2 a").eq(4).on("click", function(event) {
    $(this).siblings().attr("class", "").css("cursor", "pointer");
    $(this).attr("class", "selected").css("cursor", "default"); 
    
    charTl.to($("#devin2.photos2"), 1.25, {opacity: 1});
    charTl.to($(["#alicia2.photos2, #ty2.photos2, #sid2.photos2, #cara2.photos2"]), 1.25, {opacity: 0}, "-=1");
    
    charTl.to($("#charMenu2 a").eq(0).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(1).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(2).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(3).children(), 0.5, {opacity: 0.5}, "-=1.25");
    charTl.to($("#charMenu2 a").eq(4).children(), 0.5, {opacity: 1}, "-=1.25");
    
});
