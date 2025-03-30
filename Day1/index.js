// // gsap.to("#box",{
// //     x: 1129,
// //     backgroundColor: "pink",
// //     rotate: 360,
// //     duration: 2,
// //     delay: 1
// // })

// gsap.from("#box",{
//     x: 1129,
//     backgroundColor: "pink",
//     rotate: 360,
//     duration: 2,
//     delay: 1
// })

gsap.to("#box", { 
    x: 300,               // Move right
    y: 150,               // Move down
    rotation: 360,        // Full rotation
    scale: 1.1,           // Increase size
    // skewX: 15,            // Skew on X-axis
    opacity: 1,           // Make fully visible
    backgroundColor: "#ff5733",  // Change background color
    borderRadius: "50%",  // Make it circular
    // filter: "blur(5px)",  // Apply blur effect
    ease: "elastic.out(1.4, 0.5)", // Smooth easing
    duration: 2,          // Duration of animation
    delay: 1,           // Start after 0.5s
    repeat: 1,            // Repeat once
    yoyo: true,           // Play in reverse after finishing
  });