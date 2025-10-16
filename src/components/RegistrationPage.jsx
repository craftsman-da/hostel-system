import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSignup } from '../hooks/UseSignup';

const registrationSchema = z.object({
  fullname: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name should contain only letters and spaces"),

    app_id: z
      .string()
      .min(3, "Application ID is required")
      .regex(
        /^APP-\d{4}-\d+$/,
        "Application ID must follow the format 'APP-YYYY-XXXXX' (e.g., APP-2025-70792)"
      ),

  program: z
    .string()
    .min(2, "Program name is required")
    .max(100, "Program name is too long"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email address is required"),

  level: z
    .string()
    .refine(
      (val) => 
        ["fundamental", "advanced"].includes(val.toLowerCase()),
      "Program level must be either 'Fundamental' or 'Advanced'"
    ),

  gender: z
    .string()
    .refine(
      (val) => 
        ["male", "female"].includes(val.toLowerCase()),
      "Gender must be either 'Male' or 'Female'"
    ),
});



const RegistrationPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullname: '',
      appID: '',
      program: '',
      email: '',
      programLevel: '',
      gender: '',
    }
  });
const { signupFn} = useSignup()
  const onSubmit = (data) => {
    signupFn(data);
     console.log(data);
    
  };
console.log(errors)
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
    errorText: {
      color: '#ffb4b4',
      fontSize: '12px',
      marginTop: '5px',
    }
  };
  

  const formFields = [
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
  ];

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Student Details</h1>
          <p style={styles.headerText}>
            Provide Details To Check Available Rooms
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {formFields.map((field) => (
            <div key={field.id} style={styles.formGroup}>
              <label htmlFor={field.id} style={styles.label}>
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                {...register(field.id)}
                style={styles.input}
              />
              {errors[field.id ] && (
                <p style={styles.errorText}>
                  {errors[field.id]?.message}
                </p>
              )}
            </div>
          ))}
            
            
          <button type="submit" style={styles.button}>
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