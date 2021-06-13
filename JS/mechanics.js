$("#menu").on("click", function() {
    // $(".thecard").css("transform", "rotateY(" + 180 + "deg)")
    $(".drop_down").slideDown();
});

$(document).mouseup(function(e) {
    var container = $("#menu");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        // container.hide();
        // $(".thecard").css("transform", "rotateY(" + 0 + "deg)")
        $(".drop_down").slideUp();
    }
});