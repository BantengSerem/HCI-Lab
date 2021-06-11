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

$(".next").click(function() {
    var curr = $(".active");
    var next = curr.next();

    if (next.length != 0) {
        curr.removeClass("active");
        next.addClass("active");
    } else {
        curr.removeClass("active");
        $("#first").addClass("active")
    }
});

$(".prev").click(function() {
    var curr = $(".active");
    var prev = curr.prev();

    if (prev.length != 0) {
        curr.removeClass("active");
        prev.addClass("active");
    } else {
        curr.removeClass("active");
        $("#last").addClass("active")
    }
});

var counter = 1;

setInterval(function() {
    var c = $(".active");
    var n = c.next();
    counter++;
    if (counter > 4) {
        counter = 1;
    }
    if (n.length != 0) {
        c.removeClass("active");
        n.addClass("active");
    } else {
        c.removeClass("active");
        $("#first").addClass("active");
    }
}, 3000);

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .fromTo('.playDesc', { opacity: 0 }, { opacity: 1, duration: 2.5 });

let scene = new ScrollMagic.Scene({
        triggerElement: ".play-content",
        triggerHook: 1
    })
    .setTween(timeline)
    .addTo(controller);