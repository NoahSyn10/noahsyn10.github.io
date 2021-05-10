// Set up parallax for lead

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

new ScrollMagic.Scene({triggerElement: "#content"})
.setTween("#lead", {y: "60%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);