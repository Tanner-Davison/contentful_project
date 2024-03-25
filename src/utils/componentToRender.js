import React from 'react';
import ContentAndImage from '../components/ContentAndImage'
import SimpleCentered from '../components/SimpleCentered';

export const componentToRender = (component, content) => {
  console.log(component);
  
    switch (component) {
      case 'contentAndImage':
        return <ContentAndImage content={content}/>;
        case 'simpleCentered':
          return <SimpleCentered content={content}/>;
      default:
        return '';
    }
  };
  