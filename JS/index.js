var drop_down_flag = 0;

$("#menu").on("click", function() {
    // $(".drop_down").slideDown();
    if (drop_down_flag == 0) {
        $(".drop_down").slideDown();
        drop_down_flag = 1;
    } else {
        $(".drop_down").slideUp();
        drop_down_flag = 0;
    };
});


let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .fromTo('.playDesc', { opacity: 0 }, { opacity: 1, duration: 2 });

let scene = new ScrollMagic.Scene({
        triggerElement: ".play-content",
        triggerHook: 1
    })
    .setTween(timeline)
    .addTo(controller);

// document.querySelector(".front").style.transform = "rotate(360deg)";