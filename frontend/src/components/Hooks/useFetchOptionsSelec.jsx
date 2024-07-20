import { useState, useEffect } from 'react';

const useFetchOptionsSelec = (url) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error de operacion');
        }
        const data = await response.json();
        setOptions(data.map(item => ({
          id: item.id,
          text: item.title // O usa `item.label` si es más apropiado
        })));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [url]);

  return { options, loading, error };
};

export default useFetchOptionsSelec;
