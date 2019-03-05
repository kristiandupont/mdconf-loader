const parse = require('mdconf');

module.exports = function(text) {
  this.cacheable();

  const res = parse(text);
  return `module.exports = ${JSON.stringify(res)};`;
}
