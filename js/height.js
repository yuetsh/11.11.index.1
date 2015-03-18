 function autoHeight(a){
    var h;
    if ($(document).height() > $(window).height()) {
        h = $(document).height();
        $(a).height(h)
    } else {
        $(a).height($(window).height())
    };

    $(window).on('resize', function() {
        if ($(document).height() > $(window).height()) {
            h = $(document).height();
            $(a).height(h)
        } else {
            $(a).height($(window).height())
        }
    });
    console.log(a)
 }

// $(window).load(function(){
//         $("#loading").hide();
//     });