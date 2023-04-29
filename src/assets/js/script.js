const nav = document.querySelector("body header nav");
const about = document.querySelector("body main #about ");
const contact = document.querySelector("body main #contact ");
const footer = document.querySelector("body footer");
const links = document.querySelectorAll("body header nav ul a");

document.onscroll = (e) => {
  if (scrollY >= 10) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (
    scrollY >= (scrollY >= 10 ? about.offsetTop - 74 : about.offsetTop - 146) &&
    scrollY < (scrollY >= 10 ? contact.offsetTop - 74 : contact.offsetTop - 146)
  ) {
    links[0].classList.remove("active");
    links[1].classList.add("active");
    links[2].classList.remove("active");
  } else if (
    scrollY >=
      (scrollY >= 10 ? contact.offsetTop - 74 : contact.offsetTop - 146) &&
    scrollY < (scrollY >= 10 ? footer.offsetTop - 74 : footer.offsetTop - 146)
  ) {
    links[0].classList.remove("active");
    links[1].classList.remove("active");
    links[2].classList.add("active");
  } else {
    links[0].classList.add("active");
    links[1].classList.remove("active");
    links[2].classList.remove("active");
  }
};

links.forEach((link, idx) => {
  switch (idx) {
    case 0:
      link.onclick = () => {
        scrollTo({ behavior: "smooth", top: 0 });
      };
      break;
    case 1:
      link.onclick = () => {
        scrollTo({
          behavior: "smooth",
          top: scrollY >= 10 ? about.offsetTop - 74 : about.offsetTop - 146,
        });
      };
      break;
    case 2:
      link.onclick = () => {
        scrollTo({
          behavior: "smooth",
          top: scrollY >= 10 ? contact.offsetTop - 74 : contact.offsetTop - 146,
        });
      };
      break;
    default:
      link.onclick = () => {
        scrollTo({ behavior: "smooth", top: 0 });
      };
      break;
  }
});
