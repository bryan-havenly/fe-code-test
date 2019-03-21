import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import Designers                               from 'components/pages/Designers';
import React, { PureComponent }                from 'react';
import Rooms                                   from 'components/pages/Rooms';
import styles                                  from './styles';

export default withRouter(class App extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className={ styles.Root }>
        <Switch>
          <Route component={ Designers } exact path="/designers" />
          <Route component={ Rooms } exact path="/rooms" />
          <Redirect to="/designers" />
        </Switch>
      </div>
    );
  }
});
