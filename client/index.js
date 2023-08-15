import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

// uncomment so that webpack can bundle styles

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);