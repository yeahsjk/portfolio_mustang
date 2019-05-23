$(document).ready(function() {
        
    $("#section02").vide("video/FlyingCars_30s_low", {
        position:"bottom"
    });   
    
    $(".menu_trigger").on("click", function(e) {
        e.preventDefault();
        $(".toggle_nav").stop().slideToggle();
        $(".nav_bg").stop().slideDown();
        $(this).css("display","none");
        $(".menu_close").css("display","block");
    });
    $(".menu_close").on("click", function(e) {
        e.preventDefault();
        $(".toggle_nav").stop().slideToggle();
        $(".nav_bg").stop().slideUp();
        $(this).css("display","none");
        $(".menu_trigger").css("display","block");
    });
    $("#nav a").click(function() {
        $(".toggle_nav").stop().slideToggle();
        $(".nav_bg").stop().slideUp();
        $(".menu_close").css("display","none");
        $(".menu_trigger").css("display","block");
        $(".modal_video").hide();
    });
    
    $(".ghost_watch").on("click", function(e) {
        e.preventDefault();
        $(".modal_video").show();
    });
    $(".modal_close").on("click", function(e) {
        e.preventDefault();
        $(".modal_video").hide();
    });
    
    $("#logo_ford").on("click", function() {
        $(".modal_video").hide();
        $(".toggle_nav").stop().slideUp();
        $(".nav_bg").stop().slideUp();
        $(".menu_close").css("display","none");
        $(".menu_trigger").css("display","block");        
    });

    $(".disclosures_trigger").on("click", function(e) {
        e.preventDefault();
        $(".disclosures_text").slideToggle();
        $(this).hide();
        $(".disclosures_close").show();
    });
    $(".disclosures_close").on("click", function(e) {
        e.preventDefault();
        $(".disclosures_text").slideToggle();
        $(this).hide();
        $(".disclosures_trigger").show();
    });
    
    $("#section05").vegas( {
        slides:[
            {src:"img/features/design01.jpg"},
            {src:"img/features/performance01.jpg"},
            {src:"img/features/technology06.jpg"},
            {src:"img/features/design05.jpg"},
            {src:"img/landing/grid_design.jpg"}
        ],
        animation: 'random', delay:10000
    });
    
    $("#fullpage").fullpage({
        //options here
        autoScrolling:true,
        controlArrows:true,
        continuousVertical:true,
        navigation:false,
        slidesNavigation:false,
        scrollOverflow:false,
        responsiveHeight:767,
        scrollBar:false
        
    });

    //methods
    $.function.fullpage.setAllowScrolling(false);
    
});