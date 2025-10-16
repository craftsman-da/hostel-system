import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSignup } from '../hooks/useSignup';

const registrationSchema = z.object({
  fullname: z
    .string()
    .min(3, 'Full name must be at least 3 characters')
    .max(50, 'Full name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full name should contain only letters and spaces')
    .refine(
      (val) => val.trim().split(/\s+/).length >= 2,
      'Please enter both first name and last name'
    ),

  appID: z
    .string()
    .min(3, 'Application ID is required')
    .regex(
      /^APP-\d{4}-\d+$/,
      "Application ID must follow the format 'APP-YYYY-XXXXX' (e.g., APP-2025-70792)"
    ),

  program: z.string().min(2, 'Program name is required'),

  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email address is required'),

  programLevel: z.string().min(1, 'Program level is required'),

  gender: z.string().min(1, 'Gender is required'),
});

const RegistrationPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullname: '',
      appID: '',
      program: '',
      email: '',
      programLevel: '',
      gender: '',
    },
  });
  const { signupFn } = useSignup();

  const onSubmit = (data) => {
    const nameParts = data.fullname.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const backendData = {
      firstName,
      lastName,
      appID: data.appID,
      email: data.email,
      gender: data.gender.toLowerCase(),
      program: data.program,
      programLevel: data.programLevel.toLowerCase(),
    };
    signupFn(backendData);
    console.log('Send Data', backendData);
  };

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
    select: {
      width: '100%',
      color: '#052aaa',
      padding: '10px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      appearance: 'auto',
      cursor: 'pointer',
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
    },
  };

  const programOptions = [
    { value: '', label: 'Select a program' },
    { value: 'Software Development', label: 'Software Development' },
    { value: 'Cybersecurity', label: 'Cybersecurity' },
    { value: 'Project Management', label: 'Project Management' },
    { value: 'Call Center Attendant', label: 'Call Center Attendant' },
    { value: 'BPO', label: 'BPO' },
    { value: 'Emerging Technologies', label: 'Emerging Technologies' },
  ];

  const programLevelOptions = [
    { value: '', label: 'Select a level' },
    { value: 'Fundamental', label: 'Fundamental' },
    { value: 'Advanced', label: 'Advanced' },
  ];

  const genderOptions = [
    { value: '', label: 'Select gender' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ];

  const formFields = [
    {
      id: 'fullname',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your first and last name',
      component: 'input',
    },
    {
      id: 'appID',
      label: 'Application ID',
      type: 'text',
      placeholder: 'Enter your APP number (e.g., APP-2025-70792)',
      component: 'input',
    },
    {
      id: 'program',
      label: 'Program Enrolled',
      type: 'select',
      placeholder: '',
      options: programOptions,
      component: 'select',
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email',
      component: 'input',
    },
    {
      id: 'programLevel',
      label: 'Program Level',
      type: 'select',
      placeholder: '',
      options: programLevelOptions,
      component: 'select',
    },
    {
      id: 'gender',
      label: 'Gender',
      type: 'select',
      placeholder: '',
      options: genderOptions,
      component: 'select',
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

              {field.component === 'input' ? (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  {...register(field.id)}
                  style={styles.input}
                />
              ) : (
                <select
                  id={field.id}
                  {...register(field.id)}
                  style={styles.select}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}

              {errors[field.id] && (
                <p style={styles.errorText}>{errors[field.id]?.message}</p>
              )}
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
