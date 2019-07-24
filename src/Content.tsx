import React from 'react';
import AppTrans from './AppTrans';

const Content: React.FC = () => {
  return (
    <div>
      <AppTrans
        i18nKey={`content`}
        defaults='My content'
      />
    </div>
  );
};

export default Content;
