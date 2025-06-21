import React, { useEffect, useState } from 'react';
import { FaUser, FaClock, FaBullhorn, FaBriefcase, FaImage, FaVideo, FaMoon, FaSun, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [realtimeUsers, setRealtimeUsers] = useState(0);
  const [totalAds, setTotalAds] = useState(0);
  const [businessProfiles, setBusinessProfiles] = useState(0);
  const [bannerAds, setBannerAds] = useState(0);
  const [videoAds, setVideoAds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTotalUsers(12);
      setRealtimeUsers(3);
      setTotalAds(10);
      setBusinessProfiles(3);
      setBannerAds(4);
      setVideoAds(2);
    }, 1000);
  }, []);

  const themeStyles = {
    background: darkMode ? '#1f1f1f' : '#f4f6f8',
    color: darkMode ? '#e3e3e3' : '#222222',
    fontFamily: 'Poppins, sans-serif',
    padding: '20px',
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  };

  const buttonStyle = {
    background: darkMode ? '#444' : '#1e88e5',
    color: '#fff',
    padding: '8px 14px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500'
  };

  const selectStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    background: darkMode ? '#2a2a2a' : '#fff',
    color: darkMode ? '#fff' : '#000',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  return (
    <div style={themeStyles}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
        <h2 style={{ color: '#1e88e5', fontSize: '28px', margin: 0, fontWeight: '600' }}>LzyCrazy</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span><FaUserCircle style={{ marginRight: '5px' }} />Baishnabi | ID: lc001</span>
          <button onClick={() => setDarkMode(!darkMode)} style={buttonStyle}>
            {darkMode ? <FaSun /> : <FaMoon />} Dark Mode
          </button>
          <button style={{ ...buttonStyle, background: '#d32f2f' }}>
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </header>

      <h3 style={{
        marginTop: '10px',
        background: 'linear-gradient(to right, #1e88e5, #42a5f5)',
        color: '#fff',
        padding: '10px',
        borderRadius: '6px'
      }}>
        Client Onboarding & Real-Time Engagement Analytics System
      </h3>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <InfoCard label="Total Users" count={totalUsers} icon={<FaUser />} darkMode={darkMode} />
        <InfoCard label="Realtime Users" count={realtimeUsers} icon={<FaClock />} darkMode={darkMode} />
        <div style={{ flex: '1 1 30%' }}>
          <select style={selectStyle}>
            <option>Select Country</option>
          </select>
          <select style={selectStyle}>
            <option>Select State</option>
          </select>
          <select style={selectStyle}>
            <option>Select City</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', marginTop: '30px', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 35%', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/money-growth-graph.png"
            alt="Growth"
            style={{ width: '100%', maxWidth: '250px', height: 'auto', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
          />
        </div>
        <div style={{ flex: '1 1 60%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
          <InfoCard label="Total User Ads" count={totalAds} icon={<FaBullhorn />} darkMode={darkMode} />
          <InfoCard label="Business Profile" count={businessProfiles} icon={<FaBriefcase />} darkMode={darkMode} />
          <InfoCard label="Banner Ads" count={bannerAds} icon={<FaImage />} darkMode={darkMode} />
          <InfoCard label="Video Ads" count={videoAds} icon={<FaVideo />} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ label, count, icon, darkMode }) => (
  <div className="card" style={{
    background: darkMode
      ? 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)'
      : 'linear-gradient(135deg, #cfd9df, #e2ebf0)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    flex: '1 1 200px',
    transition: 'transform 0.3s',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    animation: 'fadeInCard 1s ease-in-out',
    cursor: 'default'
  }}>
    <div style={{ fontSize: '24px', marginBottom: '10px', color: darkMode ? '#90caf9' : '#1e88e5' }}>{icon}</div>
    <h4 style={{ margin: '0 0 6px' }}>{label}</h4>
    <h2 style={{ color: darkMode ? '#bbdefb' : '#0d47a1' }}>{String(count).padStart(2, '0')}</h2>
  </div>
);

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeInCard {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  .card:hover {
    transform: scale(1.03);
  }
  button:hover {
    opacity: 0.9;
  }
`;
document.head.appendChild(style);

export default Dashboard;
