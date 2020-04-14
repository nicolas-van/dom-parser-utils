
const assert = (cond, txt) => {
  if (!cond) {
    throw new Error(txt)
  }
}

/**
 * Parses a fragment of HTML.
 *
 * @param {string} str A text
 * @returns {Array} A list of node elements
 */
export function htmlFragment (str) {
  const div = document.createElement('div')
  div.innerHTML = str
  return Array.from(div.children)
}

/**
 * Parses a single html element.
 *
 * @param {string} str The HTML fragment
 * @returns {Element} A single element
 */
export function htmlElement (str) {
  const elems = htmlFragment(str)
  assert(elems.length === 1, 'HTML fragment doesn\'t contain exactly one element')
  return elems[0]
}
