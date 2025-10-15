import React from 'react';

const LandingPage = () => {
  const styles = {
    body: {
      //   background: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '100%',
      maxWidth: '400px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      padding: '30px 20px',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    logoRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    logo: {
      width: '100px',
      height: '100px',
      objectFit: 'contain',
    },
    headerTitle: {
      fontSize: '22px',
      marginBottom: '8px',
    },
    headerText: {
      fontSize: '14px',
      color: '#e0e7ff',
      marginBottom: '25px',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: '0.3s',
      marginBottom: '20px',
      '&:hover': {
        opacity: 0.9,
        transform: 'scale(1.02)',
      },
    },
    quickLinks: {
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '10px',
      padding: '15px',
      textAlign: 'left',
    },
    quickLinksTitle: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    quickLinksList: {
      listStyle: 'none',
      padding: 0,
    },
    quickLinksItem: {
      marginBottom: '8px',
    },
    link: {
      color: '#dbeafe',
      textDecoration: 'none',
      transition: 'color 0.3s',
      '&:hover': {
        color: 'white',
      },
    },
    footer: {
      marginTop: '25px',
      fontSize: '12px',
      color: '#dbeafe',
      lineHeight: 1.4,
    },
    '@media (max-width: 500px)': {
      container: {
        padding: '20px',
      },
      logo: {
        width: '55px',
        height: '55px',
      },
      headerTitle: {
        fontSize: '20px',
      },
      button: {
        fontSize: '15px',
      },
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.logoRow}>
          <img src='sbts.png' alt='DBI Logo' style={styles.logo} />
          <img src='dbi.png' alt='SBTS Logo' style={styles.logo} />
        </div>

        <div>
          <h1 style={styles.headerTitle}>Welcome to Student Hostel Portal</h1>
          <p style={styles.headerText}>
            Manage your hostel allocation and payment with ease
          </p>
        </div>

        <button style={styles.button}>
          <a
            href='loginpage.html'
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Proceed to Login
          </a>
        </button>

        <div style={styles.quickLinks}>
          <h2 style={styles.quickLinksTitle}>Quick Links</h2>
          <ul style={styles.quickLinksList}>
            {[
              'Hostel Allocation',
              'Payment Status',
              'Support Center',
              'FAQs',
            ].map((link, index) => (
              <li key={index} style={styles.quickLinksItem}>
                <a href='#' style={styles.link}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer style={styles.footer}>
          <p>© Powered by Enugu SBTS/ICBM Students</p>
          <p>2025 Student Hostel Portal. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
