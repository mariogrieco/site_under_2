import React from 'react'
import { hydrate } from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './src/AppRoutes'

hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
