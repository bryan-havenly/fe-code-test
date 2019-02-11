import * as appPropTypes        from 'constants/propTypes';
import classNames               from 'classnames/bind';
import HeartIcon                from './svg/heart';
import React, { PureComponent } from 'react';
import styles                   from './styles';

const cx = classNames.bind(styles);

export default class DesignerInfo extends PureComponent {
  static propTypes = {
    designer : appPropTypes.designer,
  }

  getFavoriteClasses = () => cx({
    Heart      : true,
    isFavorite : this.props.designer.get('isFavorite'),
  })

  handleFavorite = () => {}

  render() {
    return (
      <div className={ styles.Root }>
        <div
          className={ styles.DesignerPhoto }
          style={{ backgroundImage: `url('${this.props.designer.get('photo')}')` }}
        >
          <button
            className={ this.getFavoriteClasses() }
            dangerouslySetInnerHTML={{ __html: HeartIcon }}
            onClick={ this.handleFavorite }
          />
        </div>

        <div className={ styles.Name }>
          { this.props.designer.get('displayName') }
        </div>
      </div>
    );
  }
}
