import * as actionTypes from 'constants/actionTypes';
import graphql          from 'lib/api/graphql';
import designersQuery   from 'graphQL/queries/designers';

export default {
  load : () => (dispatch) => dispatch({
    type    : actionTypes.LOAD_DESIGNERS,
    payload : graphql(designersQuery),
  }),
};
