import axios from 'axios';
import { createContext, useState } from 'react';

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useState(() => {
    const getData = async () => {
      const res = await axios.get('https://blockable-web.herokuapp.com/api/get-alls');
      setData(res.data);
    };
    getData();
  }, []);

  return <DataContext.Provider value={data}>{data && children}</DataContext.Provider>;
};
