const para = document.createElement("p");
const paraText = document.createTextNode("Total fruits: 4");
para.id = "fruits-total";
para.appendChild(paraText);

const fruits = document.querySelector(".fruits");
fruits.insertBefore(para, fruits[0]);

const header = document.getElementById("header");
const h3 = document.createElement("h3");
h3.innerText = "Buy high quality organic fruits online";
h3.style.fontStyle = "italic";
header.appendChild(h3);
