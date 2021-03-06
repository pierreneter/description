var striptags = require('striptags')
var stripmd = require('remove-markdown')

module.exports = function ({ content, limit = null, endWith = '...', by = 'char' }) {
  var origin = striptags(stripmd(content));
  var result = '';
  var count = origin.length;

  if (by === 'word') {
    if (!limit) limit = 45;

    var contentArr = origin.split(' ');

    count = contentArr.length;

    if (limit - count >= 0) return origin;

    result = contentArr.slice(0, limit).join(' ');
  } else {
    if (!limit) limit = 200;

    if (limit - count >= 0) return origin;

    var originLimit = limit;
    var i = limit;

    while (i--) {
      if (origin.charAt(i) === ' ') {
        limit = i;
        break;
      }
    }

    if (limit < originLimit * 0.7) {
      limit = originLimit;
    }

    result = origin.substr(0, limit);
  }
  return result + ' ' + endWith;
}
