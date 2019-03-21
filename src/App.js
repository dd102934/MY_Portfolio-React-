import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
      <BrowserRouter>
        <div>
          <Header />
            <Route path="/" exact />
            <Route path="/About" exact />
            <Route path="/Services" exact />
            <Route path="/Portfolio" exact />
            <Route path="/Contact" exact />
        </div>
      </BrowserRouter>
  );
};

export default App;