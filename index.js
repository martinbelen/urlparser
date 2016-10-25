'use strict';

/**
 * Replace parameter of the given url path
 * @param {String} uri
 * @param {Object} opts
 * @return {String} replaced url path
 */
module.exports = function (uri, opts){
  var regex = undefined;
  Object.keys(opts).forEach(function (key) {
    regex = new RegExp(":" + key, "g");
    uri = uri.replace( regex, opts[key] || "");
  });
  uri.replace(/\:[a-zA-Z0-9]*/g, "");
  return uri;
};