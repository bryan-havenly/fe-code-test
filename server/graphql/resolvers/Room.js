const findAll = require('../helpers/findAll');

module.exports = {
  boards : (room, args, context) => findAll('boards', { roomId : room.id }),

  isComplete : (room, args, context) => false,
};
