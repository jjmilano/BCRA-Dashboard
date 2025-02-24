import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CurrentValues from './components/CurrentValues';
import TrendChart from './components/TrendChart';
import Filters from './components/Filters';
import { fetchEconomicData } from './services/api';

function App() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState({ indicator: 'exchangeRate' });

  useEffect(() => {
    fetchEconomicData().then(setData);
  }, []);

  const handleFilterChange = (key, value) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <Filters onFilterChange={handleFilterChange} />
        <CurrentValues data={data} filter={filter} />
        <TrendChart data={data} filter={filter} />
      </main>
    </div>
  );
}

export default App;
