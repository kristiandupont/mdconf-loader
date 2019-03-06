const parse = require('mdconf');
const { getOptions } = require('loader-utils');

module.exports = function(text) {
  this.cacheable();

  const options = getOptions(this);
  const res = parse(text, options);
  return `module.exports = ${JSON.stringify(res)};`;
}
