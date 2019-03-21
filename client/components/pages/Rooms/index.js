import * as appPropTypes        from 'constants/propTypes';
import getProps                 from 'containers/getProps';
import React, { PureComponent } from 'react';
import Room                     from './Room';
import styles                   from './styles';

export default getProps('rooms', 'roomsActions')(class Rooms extends PureComponent {
  static propTypes = {
    rooms        : appPropTypes.roomsState,
    roomsActions : appPropTypes.actions,
  }

  componentDidMount() {
    this.props.roomsActions.load();
  }

  render() {
    return (
      <div className={ styles.Root }>
        <For each="room" of={ this.props.rooms.get('loaded') }>
          <Room
            key={ `room-card-${room.get('id')}` }
            room={ room }
          />
        </For>
      </div>
    );
  }
});
