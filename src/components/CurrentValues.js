import React from 'react';

const CurrentValues = ({ data }) => {
  if (!data) return <p>Loading...</p>;

  // Example data structure assumption; adjust based on actual API response
  const { inflation, exchangeRate } = data;

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div style={{ padding: '20px', background: '#e0f7fa', borderRadius: '8px' }}>
        <h3>Inflation Rate</h3>
        <p style={{ fontSize: '24px' }}>{inflation || 'N/A'}%</p>
      </div>
      <div style={{ padding: '20px', background: '#e0f7fa', borderRadius: '8px' }}>
        <h3>Exchange Rate</h3>
        <p style={{ fontSize: '24px' }}>{exchangeRate || 'N/A'} ARS/USD</p>
      </div>
    </div>
  );
};

export default CurrentValues;