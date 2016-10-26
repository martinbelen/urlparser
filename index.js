'use strict';

/**
 * Replace parameter of the given url path
 * @param {String} uri
 * @param {Object} opts
 * @return {String} replaced url path
 */
module.exports = function (uri, opts){
  Object.keys(opts).forEach(function (key) {
    var regex = new RegExp(":" + key, "g");
    uri = uri.replace( regex, opts[key] || "");
  });
  uri = uri.replace(/(&|\?)[a-zA-Z0-9-_]*=:[a-zA-Z0-9-_]*/g, '');
  uri = (uri.indexOf('?') !== -1)? uri : uri.replace('&', '?');
  return uri;
};