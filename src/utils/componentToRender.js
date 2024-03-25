import React from 'react';
import ContentAndImage from '../components/ContentAndImage'

export const componentToRender = (component, content) => {
  console.log(component);
  
    switch (component) {
      case 'ContentAndImage':
        return <ContentAndImage content={content}/>;
      default:
        return '';
    }
  };
  