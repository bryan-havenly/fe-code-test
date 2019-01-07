import * as appPropTypes        from 'constants/propTypes';
import blogIcon                 from './svg/person';
import instagramLogo            from './svg/instagram';
import pinterestLogo            from './svg/pinterest';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class SocialIcons extends PureComponent {
  static propTypes = {
    designer : appPropTypes.designer,
  }

  render() {
    const { designer } = this.props;

    return (
      <div className={ styles.Root }>
        <a
          className={ styles.Pinterest }
          dangerouslySetInnerHTML={{ __html: pinterestLogo }}
          href={ designer.get('pinterest') }
          rel="noopener noreferrer"
          target="_blank"
        />

        <a
          className={ styles.Instagram }
          dangerouslySetInnerHTML={{ __html: instagramLogo }}
          href={ designer.get('instagram') }
          rel="noopener noreferrer"
          target="_blank"
        />

        <a
          className={ styles.Person }
          dangerouslySetInnerHTML={{ __html: blogIcon }}
          href={ designer.get('blog') }
          rel="noopener noreferrer"
          target="_blank"
        />
      </div>
    );
  }
}
