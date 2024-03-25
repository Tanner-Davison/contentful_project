import React from 'react';
import ContentAndImage from '../components/ContentAndImage'

export const componentToRender = (component, content) => {
    switch (component) {
      case '':
        return <ContentAndImage/>;
      default:
        return '';
    }
  };
  