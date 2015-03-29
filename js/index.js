/**
 * Created by Saber on 2015/3/29.
 */
$(function () {
    $(".slide-2-5").hover(function () {
        $("#image-1-p1").removeClass("hover-effect-5 iphone-content-5").addClass("hover-effect-4 iphone-content-5");
        $("#image-1").removeClass("hover-effect-3 iphone-content-6").addClass("hover-effect-2 iphone-content-6");
        $("#right-p1").removeClass("hover-effect-5 slide-2-8").addClass("hover-effect-4 slide-2-8");
    }, function () {
        $("#image-1-p1").removeClass("hover-effect-4 iphone-content-5").addClass("hover-effect-5 iphone-content-5");
        $("#image-1").removeClass("hover-effect-2 iphone-content-6").addClass("hover-effect-3 iphone-content-6");
        $("#right-p1").removeClass("hover-effect-4 slide-2-8").addClass("hover-effect-5 slide-2-8");
    });

    $(".slide-2-6").hover(function () {
        $("#image-2-p2").removeClass("hover-effect-5 iphone-content-5").addClass("hover-effect-4 iphone-content-5");
        $("#image-2").removeClass("hover-effect-3 iphone-content-6").addClass("hover-effect-2  iphone-content-6");
        $("#right-p2").removeClass("hover-effect-5 slide-2-9").addClass("hover-effect-4 slide-2-9");
    }, function () {
        $("#image-2-p2").removeClass("hover-effect-4 iphone-content-5").addClass("hover-effect-5 iphone-content-5");
        $("#image-2").removeClass("hover-effect-2 iphone-content-6").addClass("hover-effect-3 iphone-content-6");
        $("#right-p2").removeClass("hover-effect-4 slide-2-9").addClass("hover-effect-5 slide-2-9");
    });

    $(".slide-2-7").hover(function () {
        $("#image-3-p3").removeClass("hover-effect-5 iphone-content-5").addClass("hover-effect-4 iphone-content-5");
        $("#image-3").removeClass("hover-effect-3 iphone-content-6").addClass("hover-effect-2 iphone-content-6");
        $("#right-p3").removeClass("hover-effect-5 slide-2-9").addClass("hover-effect-4 slide-2-9");
    }, function () {
        $("#image-3-p3").removeClass("hover-effect-4 iphone-content-5").addClass("hover-effect-5 iphone-content-5");
        $("#image-3").removeClass("hover-effect-2 iphone-content-6").addClass("hover-effect-3 iphone-content-6");
        $("#right-p3").removeClass("hover-effect-4 slide-2-10").addClass("hover-effect-5 slide-2-10");
    });
});