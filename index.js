
module.exports = set;

/**
 * Set the favicon to the given data uri `str`.
 *
 * @param {String} str
 * @api public
 */

function set(str) {
  if ('string' != typeof str) throw new TypeError('data uri string expected');
  remove();
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'icon';
  link.href = str;
  head().appendChild(link);
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
    if ('icon' == rel) return links[i];
  }
}

/**
 * Remove current favicon link with rel=icon.
 *
 * @api private
 */

function remove() {
  var link = current();
  if (!link) return;
  head().removeChild(link);
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