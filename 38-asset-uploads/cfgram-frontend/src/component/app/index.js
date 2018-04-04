import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LandingContainer from '../landing-container';
import SettingsContainer from '../settings-container';
import * as util from '../../lib/util.js';
import appCreateStore from '../../lib/app-create-store.js';
import {tokenSet} from '../../action/auth-actions.js';

let store = appCreateStore();

class App extends React.Component {
  componentDidMount() {
    let token = util.readCookie('X-Sluggram-Token');
    if (token) {
      this.props.tokenSet(token);
    }
  }

  render() {
    return (
      <section className='cfgram'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>cfgram</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'>signup</Link></li>
                    <li><Link to='/welcome/login'>login</Link></li>
                    <li><Link to='/settings'>settings</Link></li>
                  </ul>
                </nav>
              </header>
              <Route path='/welcome/:auth' component={LandingContainer} />
              <Route exact path='/settings' component={SettingsContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App;
