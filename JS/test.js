let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline.fromTo('.text', { opacity: 0 }, { opacity: 1, duration: 2 });
timeline
    .to('.rock', 3, { y: -200 })
    .to('.girl', 3, { y: -100 }, "-=3")
    .fromTo('.bg1', { y: -50 }, { y: 0, duration: 3 }, "-=3")
    .to('.content', 3, { top: '0%' }, "-=3");

let scene = new ScrollMagic.Scene({
        triggerElement: "section",
        duration: "100%",
        triggerHook: 0
    })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);