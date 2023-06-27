import React, {useContext} from 'react';
import { LanguageContext } from '../../Header';

const WelcomeMessage = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  let message = '';

  switch (selectedLanguage) {
    case 'GER':
      message = 'Hallo Welt!';
      break;
    case 'ENG':
      message = 'Hello World!';
      break;
    default:
      message = 'Welcome!';
  }

  return <p>{message}</p>;
};

export default WelcomeMessage;
