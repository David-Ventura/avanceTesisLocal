import React, {useState, useEffect} from 'react'

const useFetchEmpleadosUso = (url) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOptions = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOptions(data);
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

export default useFetchEmpleadosUso
