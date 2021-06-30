makeRows = (rows) => {
  const container = document.getElementById("container");

  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", rows);
  for (i = 0; i < rows * rows; i++) {
    let box = document.createElement("div");
    container.appendChild(box).className = "grid-item";
    box.addEventListener("mouseover", (e) => {
      box.style.setProperty("background-color", "black");
    });
  }
};

listen = (item) => {
  item.setAttribute("style", "background-color:black;");
};

handleButton = () => {
  document.getElementById("container").innerHTML = "";
  let rows = prompt("Enter number of squares per side:", 16);
  if (rows > 100) {
    rows = 100;
  }
  makeRows(rows);
};
