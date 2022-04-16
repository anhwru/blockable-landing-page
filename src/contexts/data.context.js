import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await axios.get('https://blockable-web.herokuapp.com/api/get-alls');
      setData(res.data);
    }

    getData();
  }, []);

  return (
    <DataContext.Provider value={data}>{data ? children : <div>loading</div>}</DataContext.Provider>
  );
};
