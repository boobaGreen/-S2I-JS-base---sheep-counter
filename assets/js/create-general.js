const body = document.body;

// Function for create general elements
export default function createGeneralElement(tagHtml, className, content) {
  const newElement = document.createElement(tagHtml);
  newElement.innerHTML = content;
  newElement.classList.add(className);
  newElement.setAttribute("id", className);
  body.appendChild(newElement);
}

// Elements generated
// createGeneralElement("div", "counter", "");
