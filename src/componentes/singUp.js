// src/SignUp.js
import React from 'react';

const Container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const FormWrapper = {
  background: "rgba(0, 0, 0, 0.7)",
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

const SignUp = ({ onSwitchView }) => (
  <div style={Container}>
    <div style={FormWrapper}>
      <h2>Register with</h2>
      <form>
        <input style={Input} type="text" placeholder="Your full name" />
        <input style={Input} type="email" placeholder="Your email address" />
        <input style={Input} type="password" placeholder="Your password" />
        <button style={Button} type="submit">SIGN UP</button>
      </form>
      <p>
        Already have an account? <span onClick={() => onSwitchView('signIn')} style={{ color: '#1e90ff', cursor: 'pointer' }}>Sign in</span>
      </p>
    </div>
  </div>
);

export default SignUp;
