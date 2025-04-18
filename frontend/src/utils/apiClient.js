import axios from 'axios';

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '/api'  // For production
    : '/api', // For development (proxy handles this)
  timeout: 15000, // 15 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Request interceptor for adding auth token, etc
apiClient.interceptors.request.use(
  (config) => {
    // You could add auth token here if needed in the future
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let errorMessage = "An unexpected error occurred";
    let errorDetail = null;
    
    if (error.name === 'AbortError' || error.code === 'ECONNABORTED') {
      errorMessage = "Request timed out. Please check your connection and try again.";
    } else if (error.response) {
      // The request was made and the server responded with a status code outside of 2xx range
      switch (error.response.status) {
        case 400:
          errorMessage = "Invalid request. Please check your data.";
          break;
        case 401:
          errorMessage = "Unauthorized. Please log in again.";
          break;
        case 403:
          errorMessage = "You don't have permission to access this resource.";
          break;
        case 404:
          errorMessage = "Resource not found.";
          break;
        case 429:
          errorMessage = "Too many requests. Please try again later.";
          break;
        case 500:
        case 502:
        case 503:
        case 504:
          errorMessage = "Server error. Please try again later.";
          break;
        default:
          errorMessage = `Error: ${error.response.status}`;
      }
      errorDetail = error.response.data?.error || null;
    } else if (error.request) {
      // The request was made but no response received
      errorMessage = "Could not connect to the server. Please check your internet connection.";
    }
    
    // Add error message and detail to the error object
    error.userMessage = errorMessage;
    error.errorDetail = errorDetail;
    
    return Promise.reject(error);
  }
);

// Helper function for API calls with loading state management
export const useApiCall = (setLoadingState) => {
  const makeRequest = async (requestFn) => {
    try {
      setLoadingState && setLoadingState(true);
      const response = await requestFn();
      return { data: response.data, error: null };
    } catch (error) {
      console.error('API Error:', error);
      return { 
        data: null, 
        error: {
          message: error.userMessage || "An unexpected error occurred",
          detail: error.errorDetail || null,
          originalError: error
        }
      };
    } finally {
      setLoadingState && setLoadingState(false);
    }
  };

  return makeRequest;
};

export default apiClient;