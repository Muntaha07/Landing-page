t1 = gsap.timeline()
t1.from('nav h4', {
    y: -50,         // Move the elements 50 pixels upward
    opacity: 0,     // Start with opacity 0 (invisible)
    duration: 1,  // Duration of the animation (1 seconds)
    stagger: 0.2 ,   // Stagger the animation by 1 seconds between each element
    delay:0.2
})
t1.from('h1', {
    x: -100,         // Move the elements 50 pixels upward
    opacity: 0,     // Start with opacity 0 (invisible)
    duration: 1,  // Duration of the animation (1 seconds)
    stagger: 0.2 ,   // Stagger the animation by 1 seconds between each element
    delay:0.2
})
t1.from('img', {
    x: 100,         // Move the elements 50 pixels upward
    opacity: 0,     // Start with opacity 0 (invisible)
    duration: 1,  // Duration of the animation (1 seconds)
    stagger: 0.2 ,   // Stagger the animation by 1 seconds between each element
    delay:0.2
})
t1.from('.footer h4', {
    y: 100,         // Move the elements 50 pixels upward
    opacity: 0,     // Start with opacity 0 (invisible)
    duration: 1,  // Duration of the animation (1 seconds)
    stagger: 0.2 ,   // Stagger the animation by 1 seconds between each element
    delay:0.2
})

