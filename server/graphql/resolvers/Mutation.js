const findAll   = require('../helpers/findAll');
const findOne   = require('../helpers/findOne');
const updateAll = require('../helpers/updateAll');

module.exports = {
  room : async (root, args) => {
    await updateAll('rooms', { isPaid : 0 }, { id : args.id });
    return findOne('rooms', { id : args.id });
  },
};
