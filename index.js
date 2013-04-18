
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
  if (el && !orig) orig = el.href;

  // create
  if (!el) {
    el = create();
    head().appendChild(el);
  }

  el.href = str;
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
  var el = document.querySelector('link[rel=icon]');
  if (!el) return;

  if (orig) {
    el.href = orig;
  } else {
    head().removeChild(el);
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
