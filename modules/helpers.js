// @ts-check

/**
 *
 * ...
 *
 * @param {object} props
 * @param {string} props.dataAttr
 * @param {string} [props.value]
 * @param {HTMLElement | ShadowRoot} [props.target]
 * @returns {HTMLElement}
 */
export const getHtml = (props) => {
  const { dataAttr, value, target } = props;

  const selector = value
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`;

  const scope = target || document;
  const element = scope.querySelector(selector);
  const isHtmlElement = element instanceof HTMLElement;

  if (!isHtmlElement) {
    throw new Error(`${selector} attribute not found in HTML`);
  }

  return element;
};

/**
 *
 * ...
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
  const isHtmlElement = element instanceof HTMLElement;

  return isHtmlElement;
};

/**
 * @return {string}
 */
export const createUniqueId = () => {
  const array = [
    Math.round(Math.random() * 10000000000),
    new Date().getTime(),
    Math.round(Math.random() * 10000000000),
  ];
  return array.join("-");
};
