$(document).ready(function(){
    $("nav button.showNavigation").mouseenter(function(){
        $("nav ul.navigationMD").slideDown("slow");
    });

    $("nav li, nav form").not("nav ul.navigationMD li").mouseenter(function(){
        $("nav ul.navigationMD").slideUp("slow");
    });

    $("nav ul.navigationMD").mouseleave(function(){
        $(this).slideUp("slow");
    });

    $("section#close button.open").click(function(){
        $("section#comments").slideDown("slow");
        $("section#close button.open").hide();
        $("section#close button.close").show();
    });

    $("section#close button.close").click(function(){
        $("section#comments").slideUp("slow");
        $("section#close button.close").hide();
        $("section#close button.open").show();
    });


});