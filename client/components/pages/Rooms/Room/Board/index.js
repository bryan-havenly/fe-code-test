import * as appPropTypes        from 'constants/propTypes';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Board extends PureComponent {
  static propTypes = {
    board : appPropTypes.board.isRequired,
  }

  render() {
    const { board } = this.props;

    return (
      <div className={ styles.Root }>
        <div
          className={ styles.Image }
          style={{
            backgroundImage : `url('https://source.unsplash.com/random?${board.get('id')}')`
          }}
          />
      </div>
    );
  }
}
