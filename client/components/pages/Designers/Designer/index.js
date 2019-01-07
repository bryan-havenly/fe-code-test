import DesignerInfo             from './DesignerInfo';
import React, { PureComponent } from 'react';
import SocialIcons              from './SocialIcons';
import styles                   from './styles';
import * as appPropTypes        from 'constants/propTypes';

export default class Designer extends PureComponent {
  static propTypes = {
    designer : appPropTypes.designer,
  }

  render() {
    return (
      <div className={ styles.Root }>
        <div className={ styles.DesignerWrap }>
          <DesignerInfo
            designer={ this.props.designer }
            designersActions={ this.props.designersActions }
          />

          <SocialIcons designer={ this.props.designer } />
        </div>

        <div className={ styles.CarouselWrap }>
          <img
            className={ styles.Image }
            src={ this.props.designer.get('designPhoto') }
          />
        </div>
      </div>
    );
  }
}
