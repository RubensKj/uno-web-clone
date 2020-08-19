import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import HeaderBar from '../components/HeaderBar';

// Pages
import Match from '../pages/Match';

const Routes: React.FC = () => {
  return (
    <>
      <HeaderBar />
      <BrowserRouter>
        <Switch>
          <Route path="/match/:id" component={Match} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;