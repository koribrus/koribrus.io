import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App style={{backgroundColor: 'red'}} />);

document.body.style = 'background: #f6f7fb;';