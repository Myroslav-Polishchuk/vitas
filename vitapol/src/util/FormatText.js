var linkify = require('linkify-it')();
var tlds = require('tlds');

linkify.tlds(tlds);

var format = function(str, options) {
  var matches = linkify.match(str) || [];
  var index = 0;
  var elements = [];

  var newlines = function(str, i) {
    var parts = str.split(/\n|\r/);

    parts.forEach(function(part, j) {
      if (part) {
        if (part.indexOf('img(') > -1) {
          const src = part.split('img(')[1].split(')')[0];
          elements.push(`<div class="imgWrapper">
            <img src="${src}" alt="#"/>
          </div>`);
        } else if (part.indexOf('youtube(') > -1) {
          const src = part.split('youtube(')[1].split(')')[0];
          const youtube = (`<div class='iframeWrapper' >
              <iframe
                src="${src}"
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
          </div>`);
          elements.push(youtube);
        } else {
          elements.push(`<div>${part}</div>`);
        }
      }
    });
  };

  newlines(str.slice(index), matches.length);

  return elements;
};

module.exports = function (text) {
  return text && format(text, {}).join('');
}