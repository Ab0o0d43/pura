$(document).ready(function(){
    $(".grid").hover(function(){
        $(this).find(".overviewLayout").fadeIn(200);
    },function(){
        $(this).find(".overviewLayout").fadeOut(200); 
    }
    );
    $(".teamTest").hover(function(){
        $(this).find(".overlay").fadeIn(200);
        $(this).find(".ourTeamC").css({"visibility":"hidden"});
    },function(){
        $(this).find(".overlay").fadeOut(200);
        $(this).find(".ourTeamC").css({"visibility":"visible"});
    }
    );

});