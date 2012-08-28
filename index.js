
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
  var prev = remove();
  if (!orig) orig = prev;
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'icon';
  link.href = str;
  head().appendChild(link);
}

/**
 * Reset to the original favicon.
 *
 * @api public
 */

function reset() {
  remove();
  if (orig) head().appendChild(orig);
}

/**
 * Return current favicon link with rel=icon.
 *
 * @return {Element}
 * @api private
 */

function current() {
  var rel;
  var links = document.getElementsByTagName('link');
  for (var i = 0; i < links.length; ++i) {
    rel = links[i].getAttribute('rel') || '';
    if (rel.match(/\bicon\b/)) {
      return links[i];
    }
  }
}

/**
 * Remove current favicon link with rel=icon.
 *
 * @return {Element}
 * @api private
 */

function remove() {
  var link = current();
  if (!link) return;
  head().removeChild(link);
  return link;
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