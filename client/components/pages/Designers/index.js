import { Link }                 from 'react-router-dom';
import * as appPropTypes        from 'constants/propTypes';
import Designer                 from './Designer';
import getProps                 from 'containers/getProps';
import React, { PureComponent } from 'react';
import Sort                     from './Sort';
import styles                   from './styles';

export default getProps('designers')(class Designers extends PureComponent {
  static propTypes = {
    designers : appPropTypes.designersState,
  }

  render() {
    return (
      <div className={ styles.Root }>
        <div className={ styles.SortSection }>
          <Sort />
        </div>

        <div className={ styles.DesignerSection }>
          <For each="designer" of={ this.props.designers.get('loaded') }>
            <Designer
              designer={ designer }
              key={ `designer-card-${designer.get('id')}` }
            />
          </For>
        </div>
      </div>
    );
  }
});
