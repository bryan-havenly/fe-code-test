import { Link }                 from 'react-router-dom';
import * as appPropTypes        from 'constants/propTypes';
import getProps                 from 'containers/getProps';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default getProps('designers')(class Designers extends PureComponent {
  static propTypes = {
    designers : appPropTypes.designersState,
  }

  render() {
    return (
      <div className={ styles.Root }>
        <div />
      </div>
    );
  }
});
