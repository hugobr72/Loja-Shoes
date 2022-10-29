import { useEffect, useState } from 'react';


export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url)
        .then((response) => response.json())
        .then(data => data);
      setData(result);
    }
    fetchData();
  }, [url])
  return data;
};  
