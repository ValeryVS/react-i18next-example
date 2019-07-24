import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const {t, i18n} = useTranslation();

  const setEnglish = useCallback(() => {
    i18n.changeLanguage('en');
  }, [i18n]);

  const setRussian = useCallback(() => {
    i18n.changeLanguage('ru');
  }, [i18n]);

  return (
    <div>
      <button
        onClick={setEnglish}
      >
        {t('English')}
      </button>
      <button
        onClick={setRussian}
      >
        {t('Русский')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
