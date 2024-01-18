import React, { useState } from 'react';
import axios from 'axios';
import { HomePage } from './HomePage';
import { Navigate, useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });

      console.log('Login response:', response.data);

      // For demonstration purposes, you can handle success or navigate to another page
      alert('Login successful!');
    //   history.push('/HomePage'); \
     navigate("/HomePage")
    
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setError('Invalid email or password');
    }
  };

  const styles = {
    form: {
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '10px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      boxSizing: 'border-box',
    },
    centeredDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // This ensures the div takes the full height of the viewport
      },
    button: {
      width: '100px',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginLeft: '45px',
    },
    error: {
      color: 'red',
    },
  };
  
  return (
    <div style={styles.centeredDiv}>
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
  <h2>Login Page</h2>
  <form onSubmit={handleLogin} style={styles.form}>
    <div style={styles.formGroup}>
      <label style={styles.label}>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
    </div>
    <div style={styles.formGroup}>
      <label style={styles.label}>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
    </div>
    <button type="submit" style={styles.button}>Login</button>
    {error && <p style={styles.error}>{error}</p>}
  </form>
</div>
</div>
  );
};

export default LoginPage;
