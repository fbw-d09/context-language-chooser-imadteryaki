import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';


const LanguageChooser = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <select className="language-chooser" value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="GERMAN">GERMAN</option>
      <option value="ENGLISH">ENGLISH</option>
      <option value="ARABIC">ARABIC</option>
      <option value="SPANISH">SPANISH</option>
      <option value="FRENCH">FRENCH</option>
      <option value="TURKISH">TURKISH</option>
      <option value="PERSIAN">PERSIAN</option>
      <option value="JAPANESE">JAPANESE</option>
    </select>
  );
};

export default LanguageChooser;
