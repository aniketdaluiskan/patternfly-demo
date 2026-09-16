import React from 'react';
import ReactDOM from 'react-dom/client';

// Base PatternFly styles must be imported before any component-level CSS
// so that component styles can correctly override base tokens.
import '@patternfly/react-core/dist/styles/base.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
