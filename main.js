const tl = gsap.timeline({defaults: {duration: 0.5, ease: "power1.out"}})

tl.fromTo('.myphotobox', {x:-1200}, {x:0})
tl.fromTo('.textimage', {x:900}, {x:0})
tl.fromTo('.menubox', {y:200}, {y:0})
tl.fromTo('.scrollBtn', {x:200}, {x:0},"<")
tl.fromTo('.iconssetting', {x:-200}, {x:0}, "<")


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 500
});

// ScrollReveal().reveal('.experiencebox', {delay: 300, orgin: 'left'});
ScrollReveal().reveal('.text1', {delay: 600, orgin: 'right'});
ScrollReveal().reveal('.contactform', {delay: 1500, orgin: 'left'});
// ScrollReveal().reveal('.myphotobox', {delay: 300, orgin: 'left'});
// ScrollReveal().reveal('.textimage', {delay: 300, orgin: 'left'});