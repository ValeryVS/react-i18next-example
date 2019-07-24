import React from 'react';

import LanguageSwitcher from './LanguageSwitcher';
import Content from './Content';

const Wrapper: React.FC = () => {
  return (
    <>
      <LanguageSwitcher />
      <Content />
    </>
  );
};

export default Wrapper;
