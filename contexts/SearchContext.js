//검색 기능 context
import React, {createContext, useState} from 'react';

const SearchContext = createContext();

export function SeacrhContextProvider({children}) {
  const [keyword, onChangeText] = useState('');
  return (
    <SearchContext.Provider value={{keyword, onChangeText}}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
