import React from 'react';
import { LanguageChooser } from './LanguageChooser';


const Header = () => {
  return (
    <header className='header'>
      <h1 className='title'>Language App</h1>
      <LanguageChooser />
    </header>
  );
};

export default Header;
