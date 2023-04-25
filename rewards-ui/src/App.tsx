import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import CustomerRewards from './rewards/CustomerRewards';
import Theme from './styleguide/Theme';
import Error from './styleguide/Core';
import ErrorBoundary from './application'
import { Provider } from './home/Context';

function App() {
  return (
    <div className="App">
      <Theme>
        <Provider>
          <ErrorBoundary>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rewards" element={<CustomerRewards />} />
                <Route path="*" element={<Error message="Page Not Found" />}>
                </Route>
              </Routes>
            </Router>
          </ErrorBoundary>
        </Provider>
      </Theme>
    </div>
  );
}

export default App;
