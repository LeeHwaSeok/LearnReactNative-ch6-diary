import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([
    {
      id: uuidv4(),
      title: '로그 3',
      body: '로그 3',
      date: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      title: '로그 4',
      body: '로그 4',
      date: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    },
    {
      id: uuidv4(),
      title: '로그 3',
      body: '로그 3',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    },
  ]);

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };

    //spread 앞에 log를 선언하면 새로운 객체가 항상 맨 앞에 추가됨
    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}
export default LogContext;
