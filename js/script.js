gsap.registerPlugin(ScrollTrigger);

gsap.to(".info-card", {
    scrollTrigger:{
        trigger: ".info-card",
        start: "top bottom",
        end: "100px 250px",
        scrub: 1,
    },
    y: "-25%",
    duration: 3,


});

