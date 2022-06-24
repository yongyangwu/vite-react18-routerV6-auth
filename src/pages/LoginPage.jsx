import React,{ useState } from 'react'
import { useAuth } from "../auth/AuthContext";
import {
  useNavigate,
} from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/";
  const login = ()=>{
    auth.signin('username', () => {
      navigate(from, { replace: true });
    });

  }

  return (
    <div>
      这是登录页面
      <button onClick={login}>点击我模拟登录</button>
    </div>
  )
}

export default LoginPage