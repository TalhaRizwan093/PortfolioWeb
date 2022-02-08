gsap.registerPlugin(ScrollTrigger);

gsap.to(".info-card", {
    scrollTrigger:{
        trigger: ".info-card",
        start: "top bottom",
        end: "100px 250px",
        markers: true,
        toggleActions: "restart pause reverse pause",
    },
    y: "-25%",
    duration: 1,


});

