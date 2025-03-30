let tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.6,
  stagger: 0.2,
  duration: 0.7,
});

tl.from("#main h1", {
  x: -600,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  delay: 0.4,
});

tl.from('img', {
  x: 100,
  opacity: 0,
  rotate: 45,
  duration: 0.8,
  delay: 0.4,
  stagger: 0.5,
})
