gsap.from(".header", {
  duration: 1,
  y: "-100px",
});
gsap.from(".landing .container .txt-area", {
  duration: 1,
  delay: 0.5,
  x: "-100vw",
});

gsap.from(".landing .container .txt-area .start-link", {
  duration: 1,
  delay: 0.7,
  rotate: 70,
});

gsap.from(".landing .container .txt-area .links", {
  duration: 1,
  delay: 0.7,
  rotate: -70,
});

gsap.from(".landing .container .img-area ", {
  duration: 1,
  delay: 0.5,
  x: "100vw",
  rotate: 90,
});

window.onscroll = function () {
  let servicesSection = document.getElementById("services");
  let aboutUsSection = document.getElementById("about-us");
  let contactUsSection = document.getElementById("contact-us");
  if (window.scrollY >= servicesSection.offsetTop - 400) {
    gsap.to(".services .card1", {
      duration: 1,
      x: "0",
    });
    gsap.to(".services .card2", {
      duration: 1,
      x: "0",
    });
    gsap.to(".services .card3", {
      duration: 1,
      x: "0",
    });
    gsap.to(".services .card4", {
      duration: 1,
      x: "0",
    });
    gsap.to(".services .card5", {
      duration: 1,
      x: "0",
    });
    gsap.to(".services .card6", {
      duration: 1,
      x: "0",
    });
  }
  if (window.scrollY >= aboutUsSection.offsetTop - 100) {
    gsap.to(".about-us .container", {
      duration: 1.5,
      x: "0vw",
    });
  }
  if (window.scrollY >= contactUsSection.offsetTop - 100) {
    gsap.from("#contact-us .container", {
      duration: 1.5,
      x: "0vw",
    });
  }
};
