$(function () {
    
    scrollSectionWindow();
    animateSectionScoll();
    thumbMoveRight1($forwardButton.eq(0));
    thumbMoveLeft1($backButton.eq(0));
    thumbMoveRight2a($forwardButton.eq(1));
    thumbMoveLeft2a($backButton.eq(1));
    thumbMoveRight2($forwardButton.eq(2));
    thumbMoveLeft2($backButton.eq(2));
    thumbMoveRight3($forwardButton.eq(3));
    thumbMoveLeft3($backButton.eq(3));
    thumbMoveRight4($forwardButton.eq(4));
    thumbMoveLeft4($backButton.eq(4));
    

});


function scrollSectionWindow() {
         
    var lastScrollTop = 0, range = 5;

    /* MENU STICKING AT DESKTOP/LAPTOP SIZE */
    $(window).scroll(function() {

        var nowScrollTop = $(this).scrollTop();

        $('.navWrapper').height('#sidebar-menu1, #sidebar-menu2, #sidebar-menu3, #sidebar-menu4, #sidebar-menu5').outerHeight();
       /* $('.navWrapper').height('#sidebar-menu1').outerHeight();*/

        if ($(window).width() >= 1024) {	

            if (Math.abs(lastScrollTop - nowScrollTop) >= range) {

                if (nowScrollTop > lastScrollTop) {
                    if (nowScrollTop > $(".nav-stacked").offset().top - 78) {      
                        $(".nav-stacked").css({'position' : 'fixed'}).css({'top' : '70px'});

                    }
                } else {             
                    if (nowScrollTop < $(".nav-stacked").offset().top - nowScrollTop / 7.15) {      
                        $(".nav-stacked").css({'position' : 'static'});
                    }

                    /*if (nowScrollTop < $("#sidebar-menu1.nav-stacked").offset().top - nowScrollTop + 478) {      
                        $("#sidebar-menu1.nav-stacked").css({'position' : 'static'});
                    }*/
                }
                lastScrollTop = nowScrollTop;   
            }  
        }

        /* MENU STICKING AT NETBOOK/TABLET SIZE */
        if ($(window).width() >= 769 && $(window).width() <= 992) {

            if (Math.abs(lastScrollTop - nowScrollTop) >= range) {

                if (nowScrollTop > lastScrollTop) {
                    if (nowScrollTop > $(".nav-stacked").offset().top - 121) {      
                        $(".nav-stacked").css({'position' : 'fixed'}).css({'top' : '120px'});
                    }
                } else {             
                    if (nowScrollTop < $(".nav-stacked").offset().top - nowScrollTop / 2.45) {      
                        $(".nav-stacked").css({'position' : 'static'});
                    }
                }
                lastScrollTop = nowScrollTop;   
            }   
        }

        /* MENU STICKING AT TABLET SIZE */
        /*if ($(window).width() >= 767 && $(window).width() <= 990) { 

            $(".nav-stacked").css({'position' : 'static'});
        } 
        */

        /* MENU STATIC AT PHONE SIZE */
        if ($(window).width() <= 768) { 

            $(".nav-stacked").css({'position' : 'static'});
        } 

    });
 }
     
     

function animateSectionScoll() {

    $('.panel a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var nowScrollTop2 = $(this).scrollTop();

        if (!$target.position().top == nowScrollTop2) {
            $('html, body').stop().animate({
                /*'scrollTop': ($target.offset().top / $(window).width() + 525)*/
                'scrollTop': ($target.offset().top / $(window).width())
            }, 2000);

            /*if ($target.offset().top == $(window).scrollTop()) {
                $('html, body').finish();
            }*/
        }
    });
     
    

    /*$('.panel li a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var nowScrollTop2 = $(this).scrollTop();


        if (!$target.position().top == nowScrollTop2) { 
             if ($(window).width() <= 1056) { 
                $('html, body').stop().animate({
                    'scrollTop': ($target.offset().top / $(window).width() + 485)
                }, 2000);
            } else {
                $('html, body').stop().animate({
                    'scrollTop': ($target.offset().top / $(window).width() + 510)
                }, 2000);
            }

            if ($target.offset().top == $(window).scrollTop()) {
                $('html, body').finish();
            }
        }

    });*/
     
     
    $('.panel li a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var nowScrollTop2 = $(this).scrollTop();


        if (!$target.position().top == nowScrollTop2) { 
             if ($(window).width() >= 769 && $(window).width() <= 992) { 
                $('html, body').stop().animate({
                    'scrollTop': ($target.offset().top / $(window).width() + 485)
                }, 2000);
            } else {
                $('html, body').stop().animate({
                    'scrollTop': ($target.offset().top / $(window).width() + 510)
                }, 2000);
            }
        }

    }); 


    $('.col-center a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': ($target.offset().top / $(window).width())
        }, 2000);
    });
     
    
    $('#org-volunteers a[href^="#"], #outreach-champs a[href^="#"], #vol-steering a[href^="#"], #board a[href^="#"], #advisory-board a[href^="#"]').parent().on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var nowScrollTop3 = $(this).scrollTop();

        if ($target.position().top == nowScrollTop3) {
            $('html, body').stop().animate({
                /*'scrollTop': ($target.offset().top / $(window).width())*/
                'scrollTop': ($target.position().top)
            }, 1000);
        }  
    });
}    







/***********  LOGO MOUSEENTER & MOUSELEAVE FUNCTION  *****************/

$(".navbar-brand img").on({
    mouseenter: function() {    
        $(this).attr('src', 'img/share-the-care_logo-hover.png');
    },
    mouseleave: function() {    
        $(this).attr('src', 'img/share-the-care_logo.png');
    }
}); 

/***************************************************************************/

 /* HOW CAN WE HELP YOU SECTION VARIABLES */

var tabCaregiver1 = $('article#caregivers-intro'),
    tabCaregiver2 = $('article#getting-started'),
    tabCaregiver3 = $('article#first-meeting'),
    tabCaregiver4 = $('article#table-of-contents'),
    tabCaregiver5 = $('article#care-workshops'),
    tabCaregiver6 = $('article#stc-background'),
    tabCaregiver7 = $('article#caregive-faq'),
    tabCaregiver8 = $('article#care-resources'),
    tabCaregiver9 = $('article#stc-group-say');

var tabHealthPro1 = $('article#health-pros-intro'),
    tabHealthPro2 = $('article#stc-support'),
    tabHealthPro3 = $('article#stc-offerings'),
    tabHealthPro4 = $('article#pro-training'),
    tabHealthPro5 = $('article#stc-stations-health'),
    tabHealthPro6 = $('article#stc-action-examples'),
    tabHealthPro7 = $('article#stc-research'),
    tabHealthPro8 = $('article#what-pros-say');

var tabFaithComm1 = $('article#faith-comm-intro'),
    tabFaithComm2 = $('article#faith-using-stc'),
    tabFaithComm3 = $('article#faith-seeding'),
    tabFaithComm4 = $('article#faith-offerings'),
    tabFaithComm5 = $('article#faith-clergy-quotes'),
    tabFaithComm6 = $('article#faith-stc-station'),
    tabFaithComm7 = $('article#faith-stc-materials');

var tabCorps1 = $('article#corps-intro'),
    tabCorps2 = $('article#corps-support'),
    tabCorps3 = $('article#corps-toughest-job'),
    tabCorps4 = $('article#corps-offerings'),
    tabCorps5 = $('article#nycp4cc-offerings'),
    tabCorps6 = $('article#corps-event-time'),
    tabCorps7 = $('article#working-caregivers-say');



/* WHY STC SECTION VARIABLES */ 

var tabWhy1 = $('article#why-stc-overview'),
    tabWhy2 = $('article#what-is-stc'),
    tabWhy3 = $('article#who-stc-helps'),
    tabWhy4 = $('article#how-people-feel'),
    tabWhy5 = $('article#why-stc-offerings'),
    tabWhy6 = $('article#stc-endorsements');



 /* WHO WE ARE SECTION VARIABLES */ 

var tabWhoWeAre1 = $('article#organization'),
    tabWhoWeAre2 = $('article#people-behind-stc'),
    tabWhoWeAre3 = $('article#story-behind-stc'),
    tabWhoWeAre4 = $('article#our-supporters'),
    tabWhoWeAre5 = $('article#awards');



 /* WHAT'S NEXT SECTION VARIABLES */ 

var tabWhatsNext1 = $('article#what-next-media'),
    tabWhatsNext2 = $('article#what-news'),
    tabWhatsNext3 = $('article#video-radio');



 /* TAKE ACTION SECTION VARIABLES */ 

var tabTakeAction1 = $('article#donate-stc'),
    tabTakeAction2 = $('article#purchase-book'),
    tabTakeAction3 = $('article#register-group'),
    tabTakeAction4 = $('article#stc-suggest-form'),
    tabTakeAction5 = $('article#share-advice'),
    tabTakeAction6 = $('article#stc-downloads'),
    tabTakeAction7 = $('article#contact-stc');
    /*tabTakeAction8 = $('article#awards');*/







/* ARTICLE CONTENT FADING IN AND OUT */

function revealTabContent($this) {

    $this.removeClass('fade in');
    $this.css('display', 'block').removeClass('tabOut').addClass('tabIn');
    $this.siblings().removeClass('tabIn').addClass('tabOut').delay(300).queue(function(next) 
    {
        $this.siblings().css('display', 'none');
        next();
    }); 
}


/***************************************************************************/

 /* HOW CAN WE HELP YOU SECTION SPECIFIC */     


$(".nav-stacked a.help1").click(function() {       
    $(this).toggleClass("active");
    $('#howCan1').css('background', 'url(img/how-can-we-help-header-img1a.jpg) no-repeat top center fixed').css('background-size', 'contain');
    $('#howCan1 h1.subtitle').text("CAREGIVERS & CONCERNED FRIENDS");
    
    if ($(window).width() >= 992 && $(window).width() <= 1024) {
        $('#howCan1').css('margin-top', '25px').css('background-position', '0 50px');
    }
    
    if ($(window).width() <= 768) { 
        $('#howCanIconSml').css('background', 'url(img/caregive-heading-sml-icon.svg) no-repeat top center').css('background-size', 'contain');
    }

    revealTabContent(tabCaregiver1);

});


$(".nav-stacked a.help2").click(function() {       
    $(this).toggleClass("active");
    $('#howCan1').css('background', 'url(img/stc_health_pros_img1a.jpg) no-repeat top center fixed').css('background-size', 'contain');
    $('#howCan1 h1.subtitle').text("HEALTH PROFESSIONALS");
    
    if ($(window).width() >= 992 && $(window).width() <= 1024) {
        $('#howCan1').css('margin-top', '25px').css('background-position', '0 50px');
    }
    
    if ($(window).width() <= 768) { 
        $('#howCanIconSml').css('background', 'url(img/health-heading-sml-icon.svg) no-repeat top center').css('background-size', 'contain');
    }

    revealTabContent(tabHealthPro1); 
});


$(".nav-stacked a.help3").click(function() {    
    $(this).toggleClass("active");
    $('#howCan1').css('background', 'url(img/stc_faith_comm_img1a.jpg) no-repeat top center fixed').css('background-size', 'contain');
    $('#howCan1 h1.subtitle').text("FAITH COMMUNITIES");
    
    if ($(window).width() >= 992 && $(window).width() <= 1024) {
        $('#howCan1').css('margin-top', '25px').css('background-position', '0 50px');
    }
    
    if ($(window).width() <= 768) { 
        $('#howCanIconSml').css('background', 'url(img/faith-heading-sml-icon.svg) no-repeat top center').css('background-size', 'contain');
    }

    revealTabContent(tabFaithComm1);

});


$(".nav-stacked a.help4").click(function() {       
    $(this).toggleClass("active");
    $('#howCan1').css('background', 'url(img/stc_corporations_img1a.jpg) no-repeat top center fixed').css('background-size', 'contain');
    $('#howCan1 h1.subtitle').text("CORPORATIONS");
    
    if ($(window).width() >= 992 && $(window).width() <= 1024) {
        $('#howCan1').css('margin-top', '25px').css('background-position', '0 50px');
    }
    
    if ($(window).width() <= 768) { 
        $('#howCanIconSml').css('background', 'url(img/corps-heading-sml-icon.svg) no-repeat top center').css('background-size', 'contain');
    }

    revealTabContent(tabCorps1);

});


/* WHY STC SECTION SPECIFIC */ 

$(".nav-stacked a.why1").click(function() {       
    $(this).toggleClass("active");

    revealTabContent(tabWhy1);
});


/* WHO WE ARE SECTION SPECIFIC */  

$(".nav-stacked a.whoWeAre1").click(function() {       
    $(this).toggleClass("active");

    revealTabContent(tabWhoWeAre1);
});


/* WHAT'S NEXT SECTION SPECIFIC */  

$(".nav-stacked a.whatsNext1").click(function() {       
    $(this).toggleClass("active");

    revealTabContent(tabWhatsNext1);
});


/* TAKE ACTION SECTION SPECIFIC */  

$(".nav-stacked a.tabTakeAction1").click(function() {       
    $(this).toggleClass("active");

    revealTabContent(takeAct1);
});


/* TAKE ACTION SECTION SPECIFIC */  

$(".nav-stacked a.tabTakeAction1").click(function() {       
    $(this).toggleClass("active");

    revealTabContent(takeAct1);
});



/*function clickTabContent() {
     $('#care-menu1 li a').on('click', function() {

        var $this = $(this),
            $siblings = $('a[data-toggle^="tab"]'),
            position = $siblings.index($this);

            console.log(position);

         if ($this.eq(position) === 0) {
             revealTabContent(tabCaregiver1);
         } else if ($this.eq(position) === 1) {
             revealTabContent(tabCaregiver2);
         } else if ($this.eq(position) === 2) {
             revealTabContent(tabCaregiver3);
         } else if ($this.eq(position) === 3) {
             revealTabContent(tabCaregiver4);
         }
     });
}*/



/* CAREGIVERS & FRIENDS LINKS */
$('#care-menu1 li a').eq(0).on('click', function () {        
    revealTabContent(tabCaregiver1);
});

$('#care-menu1 li a').eq(1).on('click', function () {        
    revealTabContent(tabCaregiver2);
});                                

$('#care-menu1 li a').eq(2).on('click', function () {
    revealTabContent(tabCaregiver3);
});

$('#care-menu1 li a').eq(3).on('click', function () {
    revealTabContent(tabCaregiver4);
});

$('#care-menu1 li a').eq(4).on('click', function () {
    revealTabContent(tabCaregiver5);
});

$('#care-menu1 li a').eq(5).on('click', function () {
    revealTabContent(tabCaregiver6);
});

$('#care-menu1 li a').eq(6).on('click', function () {
    revealTabContent(tabCaregiver7);
});

$('#care-menu1 li a').eq(7).on('click', function () {
    revealTabContent(tabCaregiver8);
});

$('#care-menu1 li a').eq(8).on('click', function () {
    revealTabContent(tabCaregiver9);
});



/* HEALTH PROFESSIONALS LINKS */
$('#care-menu2 li a').eq(0).on('click', function () {        
    revealTabContent(tabHealthPro1);
});

$('#care-menu2 li a').eq(1).on('click', function () {        
    revealTabContent(tabHealthPro2);
});                                

$('#care-menu2 li a').eq(2).on('click', function () {
    revealTabContent(tabHealthPro3);
});

$('#care-menu2 li a').eq(3).on('click', function () {
    revealTabContent(tabHealthPro4);
});

$('#care-menu2 li a').eq(4).on('click', function () {
    revealTabContent(tabHealthPro5);
});

$('#care-menu2 li a').eq(5).on('click', function () {
    revealTabContent(tabHealthPro6);
});

$('#care-menu2 li a').eq(6).on('click', function () {
    revealTabContent(tabHealthPro7);
});

$('#care-menu2 li a').eq(7).on('click', function () {
    revealTabContent(tabHealthPro8);
});



/* FAITH COMMUNITIES LINKS */
$('#care-menu3 li a').eq(0).on('click', function () {        
    revealTabContent(tabFaithComm1);
});

$('#care-menu3 li a').eq(1).on('click', function () {        
    revealTabContent(tabFaithComm2);
});                                

$('#care-menu3 li a').eq(2).on('click', function () {
    revealTabContent(tabFaithComm3);
});

$('#care-menu3 li a').eq(3).on('click', function () {
    revealTabContent(tabFaithComm4);
});

$('#care-menu3 li a').eq(4).on('click', function () {
    revealTabContent(tabFaithComm5);
});

$('#care-menu3 li a').eq(5).on('click', function () {
    revealTabContent(tabFaithComm6);
});

$('#care-menu3 li a').eq(6).on('click', function () {
    revealTabContent(tabFaithComm7);
});



/* CORPORATIONS LINKS */
$('#care-menu4 li a').eq(0).on('click', function () {        
    revealTabContent(tabCorps1);
});

$('#care-menu4 li a').eq(1).on('click', function () {        
    revealTabContent(tabCorps2);
});                                

$('#care-menu4 li a').eq(2).on('click', function () {
    revealTabContent(tabCorps3);
});

$('#care-menu4 li a').eq(3).on('click', function () {
    revealTabContent(tabCorps4);
});

$('#care-menu4 li a').eq(4).on('click', function () {
    revealTabContent(tabCorps5);
});

$('#care-menu4 li a').eq(5).on('click', function () {
    revealTabContent(tabCorps6);
});

$('#care-menu4 li a').eq(6).on('click', function () {
    revealTabContent(tabCorps7);
});




/* HIDE & SHOW "READ MORE" in CAREGIVERS TOC CONTENT */

$("article .btn.ch1").on('click', function(){
    $('.ch1.moreText').slideToggle(1000);
/*    $('.ch1.moreText p').css('text-align', 'left');*/
});

$("article .btn.ch2").on('click', function(){
    $('.ch2.moreText').slideToggle(1000);
});

$("article .btn.ch3").on('click', function(){
    $('.ch3.moreText').slideToggle(1000);
});

$("article .btn.ch4").on('click', function(){
    $('.ch4.moreText').slideToggle(1000);
});

$("article .btn.ch6").on('click', function(){
    $('.ch6.moreText').slideToggle(1000);
});


/* HIDE & SHOW "READ MORE" in HEALTH PROFESSIONALS CONTENT */ 

$("article .btn.news-pdf").on('click', function(){
    $('.news-pdf.moreText').slideToggle(1000);
});

$("article .btn.letter").on('click', function(){
    $('.letter.moreText').slideToggle(1000);
});

$("article .btn.sally-dogs").on('click', function(){
    $('.sally-dogs.moreText').slideToggle(1000);
});


/* HIDE & SHOW "READ MORE" in WHO WE ARE CONTENT */ 

$("article .sheila-bio-text").on('click', function(){
    $('.sheila-bio-text.moreText').slideToggle(1000);
});



/***************************************************************************/

 /* WHY STC SECTION SPECIFIC */


$('#why-menu li a').eq(0).on('click', function () {        
    revealTabContent(tabWhy1);
});

$('#why-menu li a').eq(1).on('click', function () {        
    revealTabContent(tabWhy2);
});                                

$('#why-menu li a').eq(2).on('click', function () {
    revealTabContent(tabWhy3);
});

$('#why-menu li a').eq(3).on('click', function () {
    revealTabContent(tabWhy4);
});

$('#why-menu li a').eq(4).on('click', function () {
    revealTabContent(tabWhy5);
});

$('#why-menu li a').eq(5).on('click', function () {
    revealTabContent(tabWhy6);
});



/***************************************************************************/

 /* WHO WE ARE SECTION SPECIFIC */


$('#who-we-are-menu li a').eq(0).on('click', function () {        
    revealTabContent(tabWhoWeAre1);
});

$('#who-we-are-menu li a').eq(1).on('click', function () {        
    revealTabContent(tabWhoWeAre2);
});                                

$('#who-we-are-menu li a').eq(2).on('click', function () {
    revealTabContent(tabWhoWeAre3);
});

$('#who-we-are-menu li a').eq(3).on('click', function () {
    revealTabContent(tabWhoWeAre4);
});

$('#who-we-are-menu li a').eq(4).on('click', function () {
    revealTabContent(tabWhoWeAre5);
});



/***************************************************************************/

 /* WHAT'S NEXT SECTION SPECIFIC */


$('#whats-next-menu li a').eq(0).on('click', function () {        
    revealTabContent(tabWhatsNext1);
});

$('#whats-next-menu li a').eq(1).on('click', function () {        
    revealTabContent(tabWhatsNext2);
});                                

$('#whats-next-menu li a').eq(2).on('click', function () {
    revealTabContent(tabWhatsNext3);
});




/***************************************************************************/

 /* TAKE ACTION SECTION SPECIFIC */


$('#take-action-menu li a').eq(0).on('click', function () {        
    revealTabContent(tabTakeAction1);
});

$('#take-action-menu li a').eq(1).on('click', function () {        
    revealTabContent(tabTakeAction2);
});                                

$('#take-action-menu li a').eq(2).on('click', function () {
    revealTabContent(tabTakeAction3);
});

$('#take-action-menu li a').eq(3).on('click', function () {
    revealTabContent(tabTakeAction4);
});

$('#take-action-menu li a').eq(4).on('click', function () {
    revealTabContent(tabTakeAction5);
});

$('#take-action-menu li a').eq(5).on('click', function () {
    revealTabContent(tabTakeAction6);
});

$('#take-action-menu li a').eq(6).on('click', function () {
    revealTabContent(tabTakeAction7);
});








// ******* GETTING BIO INFO & RETURNING TO THUMBNAIL SECTIONS *************** 

var $thumbImage = $('.img-flexed'),
    $thumbReturn = $('.closeButton a'),
    $thumbWrapper = $('.thumb-wrapper'),
    $moreText = $('.info-container .moreText'),
    $buttonContainer = $('.button-container'),
    $buttonControls = $('.button-controls'),
    $forwardButton = $('.forward-btn'),
    $backButton = $('.back-btn'),
    horizLeft = -225,
    horizRight = 225,
    horizLeftSml = -238,
    horizRightSml = 238,
    
    
    $thumbWrapper1 = $("#org-volunteers .thumb-wrapper"),
    $thumbWrapper2 = $("#outreach-champs .thumb-wrapper"),
    $thumbWrapper3 = $("#board .thumb-wrapper"),
    $thumbWrapper4 = $("#vol-steering .thumb-wrapper"),
    $thumbWrapper5 = $("#advisory-board .thumb-wrapper"),
    
    $thumbImage1 = $('#org-volunteers .img-flexed'),
    $thumbImage2 = $('#outreach-champs .img-flexed'),
    $thumbImage3 = $('#board .img-flexed'),
    $thumbImage4 = $('#vol-steering .img-flexed'),
    $thumbImage5 = $('#advisory-board .img-flexed'),
    
    $phyllisInfo = $("#phyllis-text.moreText"),
    $juneInfo = $("#june-text.moreText"),
    $bettyInfo = $("#betty-text.moreText"),
    $edInfo = $("#ed-text.moreText"),
    $christieInfo = $("#christie-text.moreText"),
    
    $claireInfo = $("#claire-text.moreText"),
    $kimiInfo = $("#kimi-text.moreText"),
    
    $maryInfo = $("#mary-text.moreText"),
    $arleneInfo = $("#arlene-text.moreText"),
    $eileenInfo = $("#eileen-text.moreText"),
    $rickInfo = $("#rick-text.moreText"),
    $gingerInfo = $("#ginger-text.moreText"),
    $aleneInfo = $("#alene-text.moreText"),
    $phyllisInfo2 = $("#phyllisS-text.moreText"),
    $marcInfo = $("#marc-text.moreText"),
    
    $melindaInfo = $("#melinda-text.moreText"),
    $steveInfo = $("#steve-text.moreText"),
    $sharonInfo = $("#sharon-text.moreText"),
    $theresaInfo = $("#theresa-text.moreText"),
    $nigelInfo = $("#nigel-text.moreText"),
    $fayInfo = $("#fay-text.moreText"),
    $johnInfo = $("#john-text.moreText"),
    
    $marcInfo2 = $("#marcB-text.moreText"),
    $jamesInfo = $("#james-text.moreText"),
    $margotInfo = $("#margot-text.moreText"),
    $franInfo = $("#fran-text.moreText"),
    $eileenInfo2 = $("#eileenH-text.moreText"),
    $susanInfo = $("#susan-text.moreText"),
    $dennisInfo = $("#dennis-text.moreText");




function revealBioInfo1($this) { // $("#phyllis-text.moreText") is the "$this"
    $this.toggleClass("active");
    $buttonControls.eq(0).css('display', 'none');
    
    $thumbImage1.siblings().removeClass('tabIn').addClass('tabOut').delay(300).queue(function(next) {
        $thumbImage1.siblings().css('display', 'none');
        
        $this.delay(100).css('display', 'block').removeClass('tabOut').addClass('tabIn');
    
        if ($(window).width() <= 320) {
            $(".info-container").eq(0).delay(200).css('width', '105%').css('left', '-15px');
        } else if ($(window).width() >= 321 && $(window).width() <= 413) {
            $(".info-container").eq(0).delay(200).css('width', '100%').css('left', '-15px');
        } else if ($(window).width() >= 414 && $(window).width() <= 480) {
            $(".info-container").eq(0).delay(200).css('width', '98%').css('left', '-15px');
        } else if ($(window).width() >= 481 && $(window).width() <= 568) {
            $(".info-container").eq(0).delay(200).css('width', '98%').css('left', '-7px');
        } else if ($(window).width() >= 569 && $(window).width() <= 768) {
            $(".info-container").eq(0).delay(200).css('width', '88%').css('left', '-10px');
        } else {
            $(".info-container").eq(0).delay(200).css('width', '90%').css('left', '-10px');
        }
        
        next();
    });
    
}


function revealBioInfo2($this) { // $("#phyllis-text.moreText") is the "$this"
    $this.toggleClass("active");
    $buttonControls.eq(1).css('display', 'none');
    
    $thumbImage2.siblings().removeClass('tabIn').addClass('tabOut').delay(300).queue(function(next) 
    {
        $thumbImage2.siblings().css('display', 'none');
        
        $this.delay(100).css('display', 'block').removeClass('tabOut').addClass('tabIn');
    
        if ($(window).width() <= 320) {
            $(".info-container").eq(1).delay(200).css('width', '105%').css('left', '-15px');
        } else if ($(window).width() >= 321 && $(window).width() <= 413) {
            $(".info-container").eq(1).delay(200).css('width', '100%').css('left', '-15px');
        } else if ($(window).width() >= 414 && $(window).width() <= 480) {
            $(".info-container").eq(1).delay(200).css('width', '98%').css('left', '-15px');
        } else if ($(window).width() >= 481 && $(window).width() <= 568) {
            $(".info-container").eq(1).delay(200).css('width', '98%').css('left', '-7px');
        } else if ($(window).width() >= 569 && $(window).width() <= 768) {
            $(".info-container").eq(1).delay(200).css('width', '88%').css('left', '-10px');
        } else {
            $(".info-container").eq(1).delay(200).css('width', '90%').css('left', '-10px');
        }
        
        next();
    });
 
}

function revealBioInfo3($this) { // $("#phyllis-text.moreText") is the "$this"
    $this.toggleClass("active");
    $buttonControls.eq(2).css('display', 'none');
    /*$(".info-container").css('width', '100%');*/
    
    $thumbImage3.siblings().removeClass('tabIn').addClass('tabOut').delay(300).queue(function(next) 
    {
        $thumbImage3.siblings().css('display', 'none');
        
        $this.delay(100).css('display', 'block').removeClass('tabOut').addClass('tabIn');
    
        if ($(window).width() <= 320) {
            $(".info-container").eq(2).delay(200).css('width', '105%').css('left', '-15px');
        } else if ($(window).width() >= 321 && $(window).width() <= 413) {
            $(".info-container").eq(2).delay(200).css('width', '100%').css('left', '-15px');
        } else if ($(window).width() >= 414 && $(window).width() <= 480) {
            $(".info-container").eq(2).delay(200).css('width', '98%').css('left', '-15px');
        } else if ($(window).width() >= 481 && $(window).width() <= 568) {
            $(".info-container").eq(2).delay(200).css('width', '98%').css('left', '-7px');
        } else if ($(window).width() >= 569 && $(window).width() <= 768) {
            $(".info-container").eq(2).delay(200).css('width', '88%').css('left', '-10px');
        } else {
            $(".info-container").eq(2).delay(200).css('width', '90%').css('left', '-10px');
        }
        
        next();
    });
 
}




function revealBioInfo4($this) { // $("#phyllis-text.moreText") is the "$this"
    $this.toggleClass("active");
    $buttonControls.eq(3).css('display', 'none');
    
    $thumbImage4.siblings().removeClass('tabIn').addClass('tabOut').delay(300).queue(function(next) 
    {
        $thumbImage4.siblings().css('display', 'none');
        
        $this.delay(100).css('display', 'block').removeClass('tabOut').addClass('tabIn');
    
        if ($(window).width() <= 320) {
            $(".info-container").eq(3).delay(200).css('width', '105%').css('left', '-15px');
        } else if ($(window).width() >= 321 && $(window).width() <= 413) {
            $(".info-container").eq(3).delay(200).css('width', '100%').css('left', '-15px');
        } else if ($(window).width() >= 414 && $(window).width() <= 480) {
            $(".info-container").eq(3).delay(200).css('width', '98%').css('left', '-15px');
        } else if ($(window).width() >= 481 && $(window).width() <= 568) {
            $(".info-container").eq(3).delay(200).css('width', '98%').css('left', '-7px');
        } else if ($(window).width() >= 569 && $(window).width() <= 768) {
            $(".info-container").eq(3).delay(200).css('width', '88%').css('left', '-10px');
        } else {
            $(".info-container").eq(3).delay(200).css('width', '90%').css('left', '-10px');
        }
        
        next();
    });
 
}


function revealBioInfo5($this) { // $("#phyllis-text.moreText") is the "$this"
    $this.toggleClass("active");
    $buttonControls.eq(4).css('display', 'none');
    
    $thumbImage5.siblings().removeClass('tabIn').addClass('tabOut').delay(300).queue(function(next) 
    {
        $thumbImage5.siblings().css('display', 'none');
        
        $this.delay(100).css('display', 'block').removeClass('tabOut').addClass('tabIn');
    
        if ($(window).width() <= 320) {
            $(".info-container").eq(4).delay(200).css('width', '105%').css('left', '-15px');
        } else if ($(window).width() >= 321 && $(window).width() <= 413) {
            $(".info-container").eq(4).delay(200).css('width', '100%').css('left', '-15px');
        } else if ($(window).width() >= 414 && $(window).width() <= 480) {
            $(".info-container").eq(4).delay(200).css('width', '98%').css('left', '-15px');
        } else if ($(window).width() >= 481 && $(window).width() <= 568) {
            $(".info-container").eq(4).delay(200).css('width', '98%').css('left', '-7px');
        } else if ($(window).width() >= 569 && $(window).width() <= 768) {
            $(".info-container").eq(4).delay(200).css('width', '88%').css('left', '-10px');
        } else {
            $(".info-container").eq(4).delay(200).css('width', '90%').css('left', '-10px');
        }
        
        next();
    });
 
}






function hideBioInfo($this) { // (thumbImage1) is the "$this"
    /*$this.children().css('display', 'block').removeClass('tabOut').addClass('tabIn');*/
    
    
    $moreText.removeClass('tabIn').addClass('tabOut').delay(300).queue(function(next) 
    {
        $buttonControls.css('display', 'block');
        
        $this.delay(100).children().css('display', 'block').removeClass('tabOut').addClass('tabIn');
    
        if ($(window).width() <= 320) {
            $(".info-container").delay(200).css('width', '80%').css('left', '-2px');
        } else if ($(window).width() >= 321 && $(window).width() <= 413) {
            $(".info-container").delay(200).css('width', '74%').css('left', '22px');
        } else if ($(window).width() >= 414 && $(window).width() <= 480) {
            $(".info-container").delay(200).css('width', '68%').css('left', '68px');
        } else if ($(window).width() >= 481 && $(window).width() <= 568) {
            $(".info-container").delay(200).css('width', '71%').css('left', '67px');
        } else if ($(window).width() >= 569 && $(window).width() <= 768) {
            $(".info-container").css('width', '80%').css('left', '40px');
        } else {
            $(".info-container").css('width', '90%').css('left', '-10px');
        }
         
        
        if ($(window).width() <= 568) { 
            $buttonControls.eq(1).css('display', 'block');
        } else {
            $buttonControls.eq(1).css('display', 'none');
        }
        
        $moreText.css('display', 'none');
        next();
    }); 
} 




// ******* MOVING FORWARD & BACK BUTTONS TO MOVE THUMBNAILS SECTIONS *************** 
    
/*$thumbWrapper.eq(0).css('left', + '0px');*/


function thumbMoveLeft1($this) { 

    $this.on('click', function() {
        $thumbWrapper1.css({left: '+=' + horizLeft + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper1.css({left: '+=' + horizLeftSml + 'px'});
        }
            
    });
}

function thumbMoveRight1($this) { 
   
    $this.on('click', function() {
        $thumbWrapper1.css({left: '+=' + horizRight + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper1.css({left: '+=' + horizRightSml + 'px'});
        }
    });
}



function thumbMoveLeft2a($this) { 

    $this.on('click', function() {
        $thumbWrapper2.css({left: '+=' + horizLeft + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper2.css({left: '+=' + horizLeftSml + 'px'});
        }
    });
}

function thumbMoveRight2a($this) { 
    
    $this.on('click', function() {
        $thumbWrapper2.css({left: '+=' + horizRight + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper2.css({left: '+=' + horizRightSml + 'px'});
        }
    });
}




function thumbMoveLeft2($this) { 

    $this.on('click', function() {
        $thumbWrapper3.css({left: '+=' + horizLeft + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper3.css({left: '+=' + horizLeftSml + 'px'});
        }
    });
}

function thumbMoveRight2($this) { 
    
    $this.on('click', function() {
        $thumbWrapper3.css({left: '+=' + horizRight + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper3.css({left: '+=' + horizRightSml + 'px'});
        }
    });
}




function thumbMoveLeft3($this) { 
    
    $this.on('click', function() {
        $thumbWrapper4.css({left: '+=' + horizLeft + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper4.css({left: '+=' + horizLeftSml + 'px'});
        }
    });
}

function thumbMoveRight3($this) { 
     
    $this.on('click', function() {
        $thumbWrapper4.css({left: '+=' + horizRight + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper4.css({left: '+=' + horizRightSml + 'px'});
        }
    });
}




function thumbMoveLeft4($this) { 
    
    $this.on('click', function() {
        $thumbWrapper5.css({left: '+=' + horizLeft + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper5.css({left: '+=' + horizLeftSml + 'px'});
        }
    });
}

function thumbMoveRight4($this) { 
    
    $this.on('click', function() {
        $thumbWrapper5.css({left: '+=' + horizRight + 'px'});
        
        if ($(window).width() <= 768) { 
            $thumbWrapper5.css({left: '+=' + horizRightSml + 'px'});
        }
    });
}






/******* ORGANIZATION VOLUNTEERS AREA **********/

$thumbImage1.eq(0).on('click', function(){
    revealBioInfo1($phyllisInfo);
});

$thumbReturn.eq(0).on('click', function (){
    hideBioInfo($thumbWrapper1);
});

$thumbImage1.eq(1).on('click', function(){
    revealBioInfo1($juneInfo);
});

$thumbReturn.eq(1).on('click', function (){
    hideBioInfo($thumbWrapper1);
});

$thumbImage1.eq(2).on('click', function(){
    revealBioInfo1($bettyInfo);
});

$thumbReturn.eq(2).on('click', function (){
    hideBioInfo($thumbWrapper1);
});

$thumbImage1.eq(3).on('click', function(){
    revealBioInfo1($edInfo);
});

$thumbReturn.eq(3).on('click', function (){
    hideBioInfo($thumbWrapper1);
});

$thumbImage1.eq(4).on('click', function(){
    revealBioInfo1($christieInfo);
});

$thumbReturn.eq(4).on('click', function (){
    hideBioInfo($thumbWrapper1);
});



/******* VOLUNTEER OUTREACH CHAMPIONS AREA **********/

$thumbImage2.eq(0).on('click', function(){
    revealBioInfo2($claireInfo);
});

$thumbReturn.eq(5).on('click', function (){
    hideBioInfo($thumbWrapper2);
});

$thumbImage2.eq(1).on('click', function(){
    revealBioInfo2($kimiInfo);
});

$thumbReturn.eq(6).on('click', function (){
    hideBioInfo($thumbWrapper2);
});



/******* BOARD AREA **********/

$thumbImage3.eq(0).on('click', function(){
    revealBioInfo3($maryInfo);
});

$thumbReturn.eq(7).on('click', function (){
    hideBioInfo($thumbWrapper3);
});

$thumbImage3.eq(1).on('click', function(){
    revealBioInfo3($arleneInfo);
});

$thumbReturn.eq(8).on('click', function (){
    hideBioInfo($thumbWrapper3);
});

$thumbImage3.eq(2).on('click', function(){
    revealBioInfo3($eileenInfo);
});

$thumbReturn.eq(9).on('click', function (){
    hideBioInfo($thumbWrapper3);
});

$thumbImage3.eq(3).on('click', function(){
    revealBioInfo3($rickInfo);
});

$thumbReturn.eq(10).on('click', function (){
    hideBioInfo($thumbWrapper3);
});

$thumbImage3.eq(4).on('click', function(){
    revealBioInfo3($gingerInfo);
});

$thumbReturn.eq(11).on('click', function (){
    hideBioInfo($thumbWrapper3);
});

$thumbImage3.eq(5).on('click', function(){
    revealBioInfo3($aleneInfo);
});

$thumbReturn.eq(12).on('click', function (){
    hideBioInfo($thumbWrapper3);
});

$thumbImage3.eq(6).on('click', function(){
    revealBioInfo3($phyllisInfo2);
});

$thumbReturn.eq(13).on('click', function (){
    hideBioInfo($thumbWrapper3);
});

$thumbImage3.eq(7).on('click', function(){
    revealBioInfo3($marcInfo);
});

$thumbReturn.eq(14).on('click', function (){
    hideBioInfo($thumbWrapper3);
});




/******* VOLUNTEER STEERING COMMITTEE AREA **********/

$thumbImage4.eq(0).on('click', function(){
    revealBioInfo4($melindaInfo);
});

$thumbReturn.eq(15).on('click', function (){
    hideBioInfo($thumbWrapper4);
});

$thumbImage4.eq(1).on('click', function(){
    revealBioInfo4($steveInfo);
});

$thumbReturn.eq(16).on('click', function (){
    hideBioInfo($thumbWrapper4);
});

$thumbImage4.eq(2).on('click', function(){
    revealBioInfo4($sharonInfo);
});

$thumbReturn.eq(17).on('click', function (){
    hideBioInfo($thumbWrapper4);
});

$thumbImage4.eq(3).on('click', function(){
    revealBioInfo4($theresaInfo);
});

$thumbReturn.eq(18).on('click', function (){
    hideBioInfo($thumbWrapper4);
});

$thumbImage4.eq(4).on('click', function(){
    revealBioInfo4($nigelInfo);
});

$thumbReturn.eq(19).on('click', function (){
    hideBioInfo($thumbWrapper4);
});

$thumbImage4.eq(5).on('click', function(){
    revealBioInfo4($fayInfo);
});

$thumbReturn.eq(20).on('click', function (){
    hideBioInfo($thumbWrapper4);
});

$thumbImage4.eq(6).on('click', function(){
    revealBioInfo4($johnInfo);
});

$thumbReturn.eq(21).on('click', function (){
    hideBioInfo($thumbWrapper4);
});



/******* ADVISORY BOARD AREA **********/

$thumbImage5.eq(0).on('click', function(){
    revealBioInfo5($marcInfo2);
});

$thumbReturn.eq(22).on('click', function (){
    hideBioInfo($thumbWrapper5);
});

$thumbImage5.eq(1).on('click', function(){
    revealBioInfo5($jamesInfo);
});

$thumbReturn.eq(23).on('click', function (){
    hideBioInfo($thumbWrapper5);
});

$thumbImage5.eq(2).on('click', function(){
    revealBioInfo5($margotInfo);
});

$thumbReturn.eq(24).on('click', function (){
    hideBioInfo($thumbWrapper5);
});

$thumbImage5.eq(3).on('click', function(){
    revealBioInfo5($franInfo);
});

$thumbReturn.eq(25).on('click', function (){
    hideBioInfo($thumbWrapper5);
});

$thumbImage5.eq(4).on('click', function(){
    revealBioInfo5($eileenInfo2);
});

$thumbReturn.eq(26).on('click', function (){
    hideBioInfo($thumbWrapper5);
});

$thumbImage5.eq(5).on('click', function(){
    revealBioInfo5($susanInfo);
});

$thumbReturn.eq(27).on('click', function (){
    hideBioInfo($thumbWrapper5);
});

$thumbImage5.eq(6).on('click', function(){
    revealBioInfo5($dennisInfo);
});

$thumbReturn.eq(28).on('click', function (){
    hideBioInfo($thumbWrapper5);
});








/*$('#care-menu1 li a').eq(0).on('click', function () {

    tabContent1.removeClass('fade in');
    tabContent1.css('display', 'block').removeClass('tabOut').addClass('tabIn');
    tabContent1.siblings().removeClass('tabIn').addClass('tabOut').delay(300).queue(function(next) {
        tabContent1.siblings().css('display', 'none');
        next();
    });
});*/


