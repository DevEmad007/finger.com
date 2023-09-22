import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { app } from './firebaseConfigs.js';
import { ThemeContext } from './hooks/themeContext/useThemeContext.jsx';
import { AuthContext } from './hooks/auth/useAuth.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeContext >
            <AuthContext>
                <App />
            </AuthContext>
        </ThemeContext>
    </BrowserRouter>
);
