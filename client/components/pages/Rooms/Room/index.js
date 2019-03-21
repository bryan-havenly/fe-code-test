import * as appPropTypes        from 'constants/propTypes';
import Board                    from './Board';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Room extends PureComponent {
  static propTypes = {
    room : appPropTypes.room.isRequired,
  }

  render() {
    const { room } = this.props;

    return (
      <div className={ styles.Root }>
        <div className={ styles.Title }>{ room.get('name') }</div>

        <div className={ styles.Complete }>
          { room.get('isComplete') ? 'COMPLETE' : 'IN PROGRESS' }
        </div>

        <div className={ styles.Paid }>
          { room.get('isPaid') ? 'PAID' : 'UNPAID' }
        </div>

        <div className={ styles.Boards }>
          <For each="board" of={ room.get('boards') }>
            <Board
              board={ board }
              key={ `board-${board.get('id')}` }
            />
          </For>
        </div>
      </div>
    );
  }
}
