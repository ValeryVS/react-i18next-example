import React from 'react';
import {Trans, TransProps, useTranslation} from 'react-i18next';

const AppTrans: React.FC<TransProps> = (props) => {
  const {t} = useTranslation();
  return (
    <div>
      <Trans
        t={t}
        {...props}
      />
    </div>
  );
}

export default AppTrans;