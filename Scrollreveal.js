//script for scroll reveal effect
const sreveal={
  distance: "50px",
  origin: "buttom",
  duration: 1000,
};

ScrollReveal().reveal(".z1",{
  ...sreveal,
});
ScrollReveal().reveal(".z2",{
  ...sreveal,
  delay:1200,
  interval:1200
});
ScrollReveal().reveal(".z3",{
  ...sreveal,
  delay:1600
});