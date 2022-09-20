import React, {useEffect, useRef} from 'react';
import {createContext, useState} from 'react';
// crypto 기능을 위해 uuidv4를 사용함
import {v4 as uuidv4} from 'uuid';
import logsStorage from '../storages/logsStorage';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const initialLogsRef = useRef(null);

  //데이터 수정
  //map으로 불변성을 지키면서 원하는 항목만 교체할 수 있다.
  const onModify = modified => {
    //배열에서 id를 찾아 일치하면 교체 or 유지
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };

  //데이터 삭제
  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  //데이터 초기 상태
  //초기 테스트를 위해 임의의 항목 5개를 추가
  const [logs, setLogs] = useState(
    Array.from({length: 5})
      .map((_, index) => ({
        id: uuidv4(),
        title: `Test title : ${index}`,
        body: `Test body : ${index}`,
        date: new Date().toISOString(),
      }))
      .reverse(),
  );

  //데이터 생성
  //uuidv4를 이용 유저 id를 암호화 시킴
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

  //Async 사용해서 데이터 저장 및 부르기
  //IIFE 패턴이랍니다
  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  return (
    //전역에서 데이터를 사용할 수 있게 Logcontext.Provider를 통해 데이터 뿌리기
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}
export default LogContext;
