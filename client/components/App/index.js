import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import Designers                               from 'components/pages/Designers';
import React, { PureComponent }                from 'react';
import styles                                  from './styles';

export default withRouter(class App extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className={ styles.Root }>
        <Switch>
          <Route component={ Designers } exact path="/designers" />
          <Route component={ Designers } exact path="/" />
          <Redirect to="/designers" />
        </Switch>
      </div>
    );
  }
});
