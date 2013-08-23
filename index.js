
/**
 * Original favicon.
 */

var orig;

/**
 * Expose `set()`.
 */

exports = module.exports = set;

/**
 * Expose `reset()`.
 */

exports.reset = reset;

/**
 * Set the favicon to the given data uri `str`.
 *
 * @param {String} str
 * @api public
 */

function set(str) {
  if ('string' != typeof str) throw new TypeError('data uri string expected');
  
  // orig
  var el = link();
  if (el) orig = orig || el.href;

  // remove old tag
  remove();

  // new one
  var el = create();
  el.href = str;
  head().appendChild(el);
}

/**
 * Return the favicon link.
 *
 * @return {Element}
 * @api private
 */

function link() {
  return document.querySelector('link[rel=icon]');
}

/**
 * Remove the favicon link.
 *
 * @api private
 */

function remove() {
  var el = link();
  if (el) el.parentNode.removeChild(el);
}

/**
 * Create a new link.
 *
 * @return {Element}
 * @api private
 */

function create() {
  var el = document.createElement('link');
  el.type = 'image/x-icon';
  el.rel = 'icon';
  return el;
}

/**
 * Reset to the original favicon.
 *
 * @api public
 */

function reset() {
  if (orig) {
    set(orig);
  } else {
    remove();
  }
}

/**
 * Return the head element.
 *
 * @return {Element}
 * @api private
 */

function head() {
  return document.getElementsByTagName('head')[0];
}
