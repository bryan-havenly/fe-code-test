import * as actionTypes from 'constants/actionTypes';
import graphql          from 'lib/api/graphql';
import roomsQuery       from 'graphQL/queries/rooms';

export default {
  load : () => (dispatch) => dispatch({
    type    : actionTypes.LOAD_ROOMS,
    payload : graphql(roomsQuery),
  }),
};
