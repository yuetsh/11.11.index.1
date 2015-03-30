/**
 * Created by Saber on 2015/3/29.
 */
$(function () {
//    $(".slide-2-5").hover(function () {
//        $("#image-1-p1").removeClass("hover-effect-5 iphone-content-5").addClass("hover-effect-4 iphone-content-5");
//        $("#image-1").removeClass("hover-effect-3 iphone-content-6").addClass("hover-effect-2 iphone-content-6");
//        $("#right-p1").removeClass("hover-effect-5 slide-2-8").addClass("hover-effect-4 slide-2-8");
//    }, function () {
//        $("#image-1-p1").removeClass("hover-effect-4 iphone-content-5").addClass("hover-effect-5 iphone-content-5");
//        $("#image-1").removeClass("hover-effect-2 iphone-content-6").addClass("hover-effect-3 iphone-content-6");
//        $("#right-p1").removeClass("hover-effect-4 slide-2-8").addClass("hover-effect-5 slide-2-8");
//    });
//
//    $(".slide-2-6").hover(function () {
//        $("#image-2-p2").removeClass("hover-effect-5 iphone-content-5").addClass("hover-effect-4 iphone-content-5");
//        $("#image-2").removeClass("hover-effect-3 iphone-content-6").addClass("hover-effect-2  iphone-content-6");
//        $("#right-p2").removeClass("hover-effect-5 slide-2-9").addClass("hover-effect-4 slide-2-9");
//    }, function () {
//        $("#image-2-p2").removeClass("hover-effect-4 iphone-content-5").addClass("hover-effect-5 iphone-content-5");
//        $("#image-2").removeClass("hover-effect-2 iphone-content-6").addClass("hover-effect-3 iphone-content-6");
//        $("#right-p2").removeClass("hover-effect-4 slide-2-9").addClass("hover-effect-5 slide-2-9");
//    });
//
//    $(".slide-2-7").hover(function () {
//        $("#image-3-p3").removeClass("hover-effect-5 iphone-content-5").addClass("hover-effect-4 iphone-content-5");
//        $("#image-3").removeClass("hover-effect-3 iphone-content-6").addClass("hover-effect-2 iphone-content-6");
//        $("#right-p3").removeClass("hover-effect-5 slide-2-10").addClass("hover-effect-4 slide-2-10");
//    }, function () {
//        $("#image-3-p3").removeClass("hover-effect-4 iphone-content-5").addClass("hover-effect-5 iphone-content-5");
//        $("#image-3").removeClass("hover-effect-2 iphone-content-6").addClass("hover-effect-3 iphone-content-6");
//        $("#right-p3").removeClass("hover-effect-4 slide-2-10").addClass("hover-effect-5 slide-2-10");
//    });


//    change#2

    $("#play").hover(function () {
        $(this).addClass("hover-swing");
    }, function () {
        $(this).delay("slow").removeClass("hover-swing slide-2-3");
    });

    $("#circle-1").hover(function () {
        $("#circle-1").addClass("hover-rubberBand");
        $("#right-p1").addClass("hover-pulse");
    }, function () {
        $("#circle-1").delay("slow").removeClass("hover-rubberBand slide-2-5");
        $("#right-p1").delay("slow").removeClass("hover-pulse slide-2-8");
    });

    $("#circle-2").hover(function () {
        $("#circle-2").addClass("hover-rubberBand");
        $("#right-p2").addClass("hover-pulse");
    }, function () {
        $("#circle-2").delay("slow").removeClass("hover-rubberBand slide-2-6");
        $("#right-p2").delay("slow").removeClass("hover-pulse slide-2-9");
    });

    $("#circle-3").hover(function () {
        $("#circle-3").addClass("hover-rubberBand");
        $("#right-p3").addClass("hover-pulse");
    }, function () {
        $("#circle-3").delay("slow").removeClass("hover-rubberBand slide-2-7");
        $("#right-p3").delay("slow").removeClass("hover-pulse slide-2-10");
    });
});
