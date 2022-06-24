import React,{ useState } from 'react'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import LoginPage from './pages/LoginPage'
import ProtectPage from './pages/ProtectPage'
import PublicPage from './pages/PublicPage'
import Layout from './pages/Layout'
import AuthProvider from './auth/AuthProvider';
import RequireAuth from './auth/RequireAuth';


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
