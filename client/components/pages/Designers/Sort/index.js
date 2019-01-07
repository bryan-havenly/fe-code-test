import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Sort extends PureComponent {
  render() {
    return (
      <div className={ styles.Root }>
        <select>
          <option>Sort By:</option>
          <option>Name</option>
          <option>Availability</option>
          <option>Favorites</option>
        </select>
      </div>
    );
  }
}
