// Set up parallax for lead

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

new ScrollMagic.Scene({triggerElement: "#body"})
.setTween("#lead", {y: "70%", ease: Linear.easeNone})
.addTo(controller);