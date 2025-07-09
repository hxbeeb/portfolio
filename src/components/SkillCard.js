import React from 'react';

const levelColors = {
  'Beginner': '#f7b731',
  'Intermediate': '#3867d6',
  'Advanced': '#20bf6b',
};

const SkillCard = ({ name, img, level }) => {
  return (
    <div className="skill-card" style={{
      background: '#333',
      borderRadius: 16,
      boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
      padding: 24,
      textAlign: 'center',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      margin: '0 10px',
      minHeight: 220,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    }}
    tabIndex={0}
    aria-label={`Skill: ${name}, Level: ${level}`}
    >
      <img src={img} alt={name + ' logo'} style={{width: 64, height: 64, marginBottom: 18, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.05)'}} />
      <h5 style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, color: '#fff'}}>{name}</h5>
      <div style={{fontSize: '0.95rem', color: levelColors[level] || '#fff', fontWeight: 500, marginBottom: 8}}>{level}</div>
      <div style={{width: '80%', height: 6, borderRadius: 3, background: '#444', margin: '0 auto'}}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: 3,
          background: levelColors[level] || '#888',
          transition: 'width 0.3s',
        }} />
      </div>
    </div>
  );
};

export default SkillCard; 