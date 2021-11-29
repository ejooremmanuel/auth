const opportunities = document.querySelectorAll(".opportunity-item");

opportunities.forEach((opportunity) =>
  opportunity.addEventListener("click", function () {
    //   if the other item active remove it first
    opportunities.forEach((e) => {
      if (e.classList.contains("active")) {
        e.classList.remove("active");
      }
    });

    // then add class active for item clicked
    this.classList.add("active");
  })
);
