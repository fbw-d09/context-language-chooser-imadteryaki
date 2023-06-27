import React, { useState } from 'react';
import { Header, Content, LanguageContext } from './components';
import './App.css';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      <div className="app">
        <Header />
        <Content />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
