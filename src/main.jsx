import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx'; // ✅ named only
import UserContext from './context/UserContext.jsx';
import ShopContext from './context/ShopContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UserContext>
          <ShopContext>
<App />
          </ShopContext>
 
        </UserContext>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
