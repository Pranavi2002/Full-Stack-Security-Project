import { useNavigate } from 'react-router-dom';
import api from '../axios/api';

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      // Notify the backend of logout
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      // Clear client-side data
      localStorage.clear();
      navigate('/login', { replace: true });
    }
  };

  return logout;
};
