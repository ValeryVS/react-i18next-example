import React from 'react';
// import {useTranslation} from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import Content from './Content';

const Wrapper: React.FC = () => {
  // const {t, i18n} = useTranslation(); // uncomment this, and switcher will work
  return (
    <>
      <LanguageSwitcher />
      <Content />
    </>
  );
};

export default Wrapper;
