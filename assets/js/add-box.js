// Counter - getted element
// const counterMainDiv = document.getElementById("counter");

// Counter - function for insert elements inside the counter
export function addElement(tagHtml, className, content) {
  const counterMainDiv = document.getElementById("counter");

  const counterNewElement = document.createElement(tagHtml);
  counterNewElement.innerHTML = content;
  counterNewElement.classList.add(className);
  counterNewElement.setAttribute("id", className);
  counterMainDiv.appendChild(counterNewElement);
}

// Counter - Elements inside div "Counter"
/* addElement("div", "display-number", "0");
addElement("div", "button-container", "");
addElement("div", "sheep", "");
 */
// Counter's name section - getted element
const counterNameSection = document.getElementById("sheep");

// Counter's name section - function for insert elements inside this section
export function addElementInsideCounterNameSection(
  tagHtml,
  className,
  content
) {
  const counterNameSection = document.getElementById("sheep");
  const counterNameSectionNewElement = document.createElement(tagHtml);
  counterNameSectionNewElement.innerHTML = content;
  counterNameSectionNewElement.classList.add(className);
  counterNameSectionNewElement.setAttribute("id", className);
  counterNameSection.appendChild(counterNameSectionNewElement);
}

// Counter's name section - elements inside this section
// addElementInsideCounterNameSection("h1", "pecora-space", "pecora-space");

// Button's container - getted element
const buttonSection = document.getElementById("button-container");

// Button's container - function for insert elements inside button's container
export function addElementInsideCounterButtonSection(
  tagHtml,
  className,
  content
) {
  const buttonSection = document.getElementById("button-container");
  const buttonSectionNewElement = document.createElement(tagHtml);
  buttonSectionNewElement.innerHTML = content;
  buttonSectionNewElement.classList.add(className);
  buttonSectionNewElement.setAttribute("id", className);
  buttonSection.appendChild(buttonSectionNewElement);
}

// Button's container - elements inside button button's container
/* addElementInsideCounterButtonSection("button", "button-increment", "+");
addElementInsideCounterButtonSection("button", "button-reset", "reset");
addElementInsideCounterButtonSection("button", "button-decrement", "-"); */
