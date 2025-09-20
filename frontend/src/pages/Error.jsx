// src/pages/Error.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go Back Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: '6rem',
    margin: 0,
    color: '#ff6b6b',
  },
  message: {
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  link: {
    marginTop: '1rem',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
  },
};

export default Error;
