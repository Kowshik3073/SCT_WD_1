const currentURL = window.location.href;

document.querySelectorAll("nav a").forEach(link => {
  const linkHref = link.href;
  if (currentURL.includes(linkHref)) {
    link.classList.add("active");
  }
});
