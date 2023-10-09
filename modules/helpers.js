// @ts-check

// SOLID

/* The Single-responsibility principle: "There should never be more than one
* reason for an abstraction to change." In other words, every abstraction should have only
* one resonsibility. 
*/

/* The Open-closed principle: "Software entities hsould be open for extension,
 * but closed for modification."
*/

/* The Liskov substitution principle: "Functions that use pointers or
 * references to base classes must be able to use objects of derived classes
 * without knowing it." See also design by contract. 
*/

/* The Interface segregation principle: "Clients should not be forced to depend
 * upon interfaces that they do not use."
*/

/* The Dependency inversion principle: "depend upon abstractions, [not]
 * concretions."
*/


/**
 * 
 * @param {string} dataAttr 
 * @param {string} [value]
 * @returns {HTMLElement}
 */
export const getHtml = (dataAttr, value) => {
    const selector = value 
    ? `[data-${dataAttr}="${value}"]` 
    : `[data-${dataAttr}]`;

    const element = document.querySelector(selector);
    const isHtmlElement = element instanceof HTMLElement;
    
    if (!isHtmlElement) {
        throw new Error(`${selector} attribute not found in HTML`);
    }

    return element;
};


/**
 * 
 * @param {string} dataAttr 
 * @param {string} [value]
 * @returns {boolean}
 */
export const doesHtmlExist = (dataAttr, value) => {
    const selector = value 
    ? `[data-${dataAttr}="${value}"]` 
    : `[data-${dataAttr}]`;

    const element = document.querySelector(selector);
    const isHtmlElement = element instanceof HTMLElement

    return isHtmlElement;
};