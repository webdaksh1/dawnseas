import React from 'react';

const Contact = ({ onBackToHome }) => {
  const styles = {
    container: {
      backgroundColor: '#151515ff',
      color: '#e6deddff',
      minHeight: '80vh',
      padding: '1rem 2rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url('https://imgs.search.brave.com/LxC_Zoinwn5rwkSHSjr0Jq1ZBUM2_Cie3Fb6x_EnNbU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC85LzIv/ZS83ODY5OC0zODQw/eDIxNjAtZGVza3Rv/cC00ay1teS1oZXJv/LWFjYWRlbWlhLWJh/Y2tncm91bmQuanBn')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backdropFilter: 'blur(5px)', 
      backgroundColor: 'rgba(21, 21, 21, 0.4)',
      zIndex: 0,
    },
    content: {
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '500px',
    },
    title: {
      fontSize: '2.8rem',
      color: '#e1a162',
      marginBottom: '1rem',
      fontWeight: '800',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#c2c2c2',
      marginBottom: '2rem',
      maxWidth: '600px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'rgba(21, 21, 21, 0.85)',
      padding: '2rem',
      borderRadius: '8px',
    },
    input: {
      padding: '0.8rem',
      borderRadius: '6px',
      border: '1px solid #a0a0a0',
      fontSize: '1rem',
      backgroundColor: '#2b2b2b',
      color: '#e6deddff',
    },
    textarea: {
      padding: '0.8rem',
      borderRadius: '6px',
      border: '1px solid #a0a0a0',
      fontSize: '1rem',
      resize: 'none',
      height: '120px',
      backgroundColor: '#2b2b2b',
      color: '#e6deddff',
    },
    button: {
      backgroundColor: '#e1a162',
      color: '#fff',
      border: 'none',
      padding: '0.9rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '1rem',
      transition: 'transform 0.2s, background-color 0.3s',
    },
    backButton: {
      marginTop: '2rem',
      color: '#e6deddff',
      background: 'rgba(225, 161, 98, 0.9)',
      border: '2px solid #e1a162',
      padding: '0.5rem 1.5rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>Contact Us ☎️</h1>
        <p style={styles.subtitle}>We’d love to hear from you! Send us your feedback, queries, or collaborations.</p>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        <button style={styles.backButton} onClick={onBackToHome}>← Back to Home</button>
      </div>
    </div>
  );
};

export default Contact;