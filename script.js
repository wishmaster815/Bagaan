// Rambaand for getting scrolltrigger working with locomotive js
function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init();

// using locomotive js for wmooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// gsap for animation
gsap.from(".nlink", {
  stagger: 0.2,
  y: 10,
  duration: 1,
  ease: Power3,
  opacity: 0,
});

Shery.textAnimate(".h-ani", {
  style: 2,
  y: 30,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".hero-ani", {
  y: 30,
  opacity: 0,
  stagger: 0.1,
  ease: Expo,
  duration: 2,
});


gsap.from(".pg2-head h1, .article-container", {
  stagger: 0.1,
  y: 10,
  duration: 1,
  ease: Power3,
  opacity: 0,
  scrollTrigger: {
      trigger: "#page2",
      endTrigger:".article-container",
      end: "bottom 60%+=100px",
      scroller: "#main",
      scrub: 1,
    //   markers: true,
      top:"-50%",
      bottom:"-50%"
    },
});
gsap.from("#side-img, #side-data", {
  stagger: 0.1,
  y: 10,
  duration: 1,
  ease: Power3,
  opacity: 0,
  scrollTrigger: {
      trigger: "#page3",
    //   endTrigger:".article-container",
      end: "bottom 60%+=100px",
      scroller: "#main",
      scrub: 1,
    //   markers: true,
      top:"-50%",
      bottom:"-50%"
    },
});

// Shery.imageEffect("#side-img img",{
//     style:4,
//     debug: true
// })
// Shery.imageEffect(".article-container", {
//     style: 4,
//     debug: true,
//   });

document.querySelector("#pg4-text").addEventListener("mouseover", function(){
    // alert("hello");
    gsap.to("#page4 video",{
        opacity:1,
  ease: Power3,
        duration:1
    })
})
document.querySelector("#pg4-text").addEventListener("mouseleave", function(){
    // alert("hello");
    gsap.to("#page4 video",{
        opacity:0,
  ease: Power3,
        duration:1
    })
})