import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';

// import Link from './components/'
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div id='dummy'>
            <nav className='nav'>
              <div>WestSide University</div> 
              <div className='link-wrap'>
                  <Link to='/' className='links'>Home</Link>
                  <Link to='/about' className='links'>About</Link> 
              </div>
            </nav>
            {routes}
          </div>
        </HashRouter>
      </div>
    )
  }
}