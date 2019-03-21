const findAll = require('../helpers/findAll');

module.exports = {
  designers : () => findAll('designers'),
  rooms     : () => findAll('rooms'),
};
