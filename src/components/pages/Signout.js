import React from "react";
import authService from '../services/auth.service'
import { useNavigate  } from "react-router-dom";

export default function SignOut(){

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('user');
     navigate("/");

  };

  return (
    <div>
      <button type="button" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}