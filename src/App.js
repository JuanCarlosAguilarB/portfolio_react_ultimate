import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PageTwo } from './pages/Page2';

import { Sidebar, Navbar } from './components';

const App = () => (
  < >
    <BrowserRouter>
      <main className='flex'>
        <Sidebar > </Sidebar>
    {/* <img src="./assets/images/bakend.png" alt=""/> */}
        <div className='flex'>
          <Navbar className='flex'></Navbar>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/page2" exact component={PageTwo} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  </>
);

export default App;

