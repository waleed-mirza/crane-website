document
  .querySelector(".hamburger .container")
  .addEventListener("click", (e) => {
    // e.target.classList.toggle("change");
    document.querySelector(".sticky-navbar").classList.toggle("show");
    document.querySelector(".top-header").classList.toggle("show");
  });
