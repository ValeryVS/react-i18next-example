import React from 'react';
import {Trans} from 'react-i18next';

const Content: React.FC = () => {
  return (
    <div>
      <Trans
        i18nKey={`content`}
        defaults='My content'
      />
    </div>
  );
};

export default Content;
