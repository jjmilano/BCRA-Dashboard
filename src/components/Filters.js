import React from 'react';

const Filters = ({ onFilterChange }) => {
  return (
    <div style={{ 
      padding: '20px',
      background: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '16px'
      }}>
        Indicator:
        <select 
          onChange={(e) => onFilterChange('indicator', e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ced4da',
            fontSize: '16px',
            minWidth: '200px'
          }}
        >
          <option value="exchangeRate">Exchange Rate</option>
          <option value="inflation">Inflation</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;