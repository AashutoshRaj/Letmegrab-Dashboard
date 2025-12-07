import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './AuthContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
    <AuthProvider>
        <ToastContainer />           
            <App />
           
    </AuthProvider>
    </ThemeProvider>
)
