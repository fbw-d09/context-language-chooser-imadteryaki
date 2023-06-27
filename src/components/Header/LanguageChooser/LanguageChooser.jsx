import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';


const LanguageChooser = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="GER">GER</option>
      <option value="ENG">ENG</option>
    </select>
  );
};

export default LanguageChooser;
