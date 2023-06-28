import React, {useContext} from 'react';
import { LanguageContext } from '../../../context/LanguageContext';

const WelcomeMessage = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  let message = '';

  switch (selectedLanguage) {
    case 'GERMAN':
      message = 'Hallo Welt!';
      break;
    case 'ENGLISH':
      message = 'Hello World!';
      break;
    case 'SPANISH':
      message = 'Hola Mundo';
      break;
    case 'FRENCH':
      message = 'Bonjour le monde!';
      break;
    case 'TURKISH':
      message = 'Selam Dünya!';
      break;
    case 'ARABIC':
      message = 'مرحبا بالعالم!';
      break;
    case 'PERSIAN':
      message = 'سلام دنیا!';
      break;
    case 'JAPANESE':
      message = 'こんにちは世界！';
      break;
    default:
      message = 'Welcome!';
  }

  return <p className="welcome-message">{message}</p>;
};

export default WelcomeMessage;
