const findOne = require('../helpers/findOne');

module.exports = {
  room : (board, args, context) => findOne('rooms', { id : board.roomId }),
};
