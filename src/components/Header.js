import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '20px', background: '#f5f5f5', textAlign: 'center' }}>
      <h1>BCRA Economic Dashboard</h1>
      <nav>
        <a href="#monetary">Monetary</a> | <a href="#financial">Financial</a>
      </nav>
    </header>
  );
};

export default Header;