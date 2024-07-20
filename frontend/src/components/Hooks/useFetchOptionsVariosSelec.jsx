import { useState, useEffect } from 'react';

const useFetchOptionsvariosSelect = (url) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setOptions(data.map(item => ({ id: item.idestudiantes, text: item.Nombre })));
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

//Cargando areas de trabajo
export const useFetchAreas=(url)=>{
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error de operacion de consulta');
        }
        const data = await response.json();
        setOptions(data.map(item => ({
          id: item.idareaTrabajoUso,
          text: item.areaTrabajoUso // O usa `item.label` si es más apropiado
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
}
//Cargando Empleados
export const useFetchEmpleadosUso=(url)=>{
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error de operacion de consulta');
        }
        const data = await response.json();
        setOptions(data.map(item => ({
          id: item.iduso_trabajo,
          text: item.Nombre // O usa `item.label` si es más apropiado
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
}
//cargando Estudiantes
export const useFetchOptionsvariosSelectEstudents = (url) => {
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

export default useFetchOptionsvariosSelect;
