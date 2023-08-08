import api from './api';
import { useState, useEffect } from 'react';

export default function ProtectedData() {
  const [data, setData] = useState("will auto load once signed in");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`${api}/protected-data`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await response.json();
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Protected Data</h1>
      <div>{data}</div>
    </div>
  );
}
