// src/SignIn.js
import React from 'react';
import { useState } from "react";

const Container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const FormWrapper = {
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
  color: "#fff",
  textAlign: "center",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
};

const Input = {
  width: "90%",
  padding: "10px",
  margin: "10px 0",
  border: "none",
  borderRadius: "5px",
};

const Button = {
  width: "100%",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#1e90ff",
  color: "white",
  cursor: "pointer",
};



const SignIn = ({ onSwitchView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (email === 'admin@admin.com' && password === 'admin') {
      alert("Login bem sucedido!");
    } else {
      alert("Nome de usuário ou senha incorretos");
    }
  };

  return(
    <div style={Container}>
      <div style={FormWrapper}>
        <h2>Welcome back!</h2>
        <form onSubmit={handleSignIn}>
          <input style={Input} type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input style={Input} type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button style={Button} type="submit">SIGN IN</button>
        </form>
        <p>
          Don't have an account? <span onClick={() => onSwitchView('signUp')} style={{ color: '#1e90ff', cursor: 'pointer' }}>Sign up</span>
        </p>
      </div>
      <script src="../script/script.js"></script>
    </div>
  );
};

export default SignIn;
