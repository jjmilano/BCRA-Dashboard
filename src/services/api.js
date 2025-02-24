import axios from 'axios';

// Using proxy URL for development to handle CORS
const API_URL = '/PublicacionesEstadisticas/Principales_variables.asp';

// Mock data for testing
const mockData = {
  inflation: 12.8,
  exchangeRate: 850.5,
  history: [
    { date: '2024-01-01', exchangeRate: 800, interestRate: 133 },
    { date: '2024-02-01', exchangeRate: 820, interestRate: 130 },
    { date: '2024-03-01', exchangeRate: 850.5, interestRate: 128 }
  ]

}

export const fetchEconomicData = async () => {
  try {
    // For development, return mock data until API integration is complete
    return mockData;
    
    // Uncomment below code when API is ready
    // const response = await axios.get(API_URL);
    // return response.data;
  } catch (error) {
    console.error('Error fetching BCRA data:', error);
    return mockData; // Fallback to mock data
  }
};