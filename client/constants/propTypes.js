import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes          from 'prop-types';

export const ISODatetime = PropTypes.string;

export const actions = PropTypes.objectOf(PropTypes.func).isRequired;

/*
match and history are both props passed by react router
*/
export const match = PropTypes.shape({
  params : PropTypes.shape({
    id : PropTypes.string,
  }),
});

export const history = PropTypes.shape({
  go      : PropTypes.func.isRequired,
  push    : PropTypes.func.isRequired,
  replace : PropTypes.func.isRequired,
}).isRequired;

export const designer = ImmutablePropTypes.contains({
  created     : ISODatetime,
  designCount : PropTypes.number,
  firstName   : PropTypes.string,
  // The GraphQL specification requires that ID scalar types are serialized as strings
  id          : PropTypes.string.isRequired,
  displayName : PropTypes.string,
  photo       : PropTypes.string,
  vanityId    : PropTypes.string,
});

export const designers = ImmutablePropTypes.listOf(designer);

export const designersState = ImmutablePropTypes.contains({
  areLoading : PropTypes.bool.isRequired,
  loaded     : designers.isRequired,
});
