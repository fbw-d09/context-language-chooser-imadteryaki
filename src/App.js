
import React from 'react';
import { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { Header, Content, LanguageContext }  from './components';


const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  return (

    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact component={Content} />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
