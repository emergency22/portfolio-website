import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import '../src/App.css'



const root = document.getElementById('root');
const app = <App />;
createRoot(root).render(app);