/**
 * Helper static functions for quickly creating elements
 */
function newElement(tag, classList, inner = "", id = "") {
  const element = document.createElement(tag);
  element.classList.add(classList);
  element.textContent = inner;
  element.id = id;

  return element;
}