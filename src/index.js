import React from 'react'
import ReactROM from 'react-dom/client';
import App from './App';
import "./assets/scss/style.scss"

const root = ReactROM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

