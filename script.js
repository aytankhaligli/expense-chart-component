const diagrams = document.querySelectorAll(".diagram");
let amount;

diagrams.forEach((diagram, i) => {
  diagram.addEventListener("mouseout", function () {
    document.querySelector(`[data-id='${i}']`).style.opacity = 0;
  });
});

diagrams.forEach((diagram, i) => {
  diagram.addEventListener("mouseover", function () {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        document.querySelector(`[data-id='${i}']`).textContent = data[i].amount;
      });
    document.querySelector(`[data-id='${i}']`).style.opacity = 1;
  });
});
