import React from 'react';
import ContentAndImage from '../components/ContentAndImage'
import SimpleCentered from '../components/SimpleCentered';

export const componentToRender = (component, content) => {
    switch (component) {
      case 'Content_And_Image':
        return <ContentAndImage content={content}/>;
        case 'Simple_Centered':
          return <SimpleCentered content={content}/>;
      default:
        return '';
    }
  };
  