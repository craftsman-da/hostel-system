import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    app_id: '',
    program: '',
    email: '',
    level: '',
    gender: '',
  });
  const navigate = useNavigate();

  const styles = {
    body: {
      background: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '100%',
      maxWidth: '420px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      padding: '30px 25px',
      backdropFilter: 'blur(10px)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '25px',
    },
    headerTitle: {
      fontSize: '24px',
      marginBottom: '8px',
    },
    headerText: {
      fontSize: '14px',
      color: '#dbeafe',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#f1f5f9',
    },
    input: {
      width: '100%',
      color: '#052aaa',
      padding: '10px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      '&:focus': {
        border: '2px solid #3b82f6',
        backgroundColor: 'white',
      },
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'white',
      background: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: '0.3s',
      marginTop: '10px',
      '&:hover': {
        opacity: 0.9,
        transform: 'scale(1.02)',
      },
    },
    footer: {
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '14px',
      color: '#dbeafe',
    },
    footerLink: {
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your registration logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Student Details</h1>
          <p style={styles.headerText}>
            Provide Details To Check Available Rooms
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {[
            {
              id: 'fullname',
              label: 'Full Name',
              type: 'text',
              placeholder: 'Enter your full name',
            },
            {
              id: 'app_id',
              label: 'Application ID',
              type: 'text',
              placeholder: 'Enter your APP number',
            },
            {
              id: 'program',
              label: 'Program Enrolled',
              type: 'text',
              placeholder: 'Enter your Program Course',
            },
            {
              id: 'email',
              label: 'Email Address',
              type: 'email',
              placeholder: 'Enter your email',
            },
            {
              id: 'level',
              label: 'Program Level',
              type: 'text',
              placeholder: 'Fundamental or Advanced',
            },
            {
              id: 'gender',
              label: 'Gender',
              type: 'text',
              placeholder: 'Male or female',
            },
          ].map((field) => (
            <div key={field.id} style={styles.formGroup}>
              <label htmlFor={field.id} style={styles.label}>
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          ))}

          <button type='submit' style={styles.button}>
            Submit
          </button>
        </form>

        <div style={styles.footer}>
          <p>
            Already Submitted Your Details{' '}
            <a onClick={() => navigate('/identify')} style={styles.footerLink}>
              Check here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
