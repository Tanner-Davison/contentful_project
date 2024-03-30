import React from 'react';
import ContentAndImage from '../components/ContentAndImage'
import SimpleCentered from '../components/SimpleCentered';

export const componentToRender = (component, content) => {
  console.log(component, content);
  
    switch (component) {
      case 'ContentfulContentAndImage':
        return <ContentAndImage content={content}/>;
        case 'ContentfulSimpleCentered':
          return <SimpleCentered content={content}/>;
      default:
        return '';
    }
  };
  