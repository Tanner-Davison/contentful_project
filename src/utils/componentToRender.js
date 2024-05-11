import React, { Suspense } from 'react';
import PinnedScrollLayout from '../components/PinnedScrollLayout';
import SimpleCentered from '../components/SimpleCentered';
import ContentAndImage from '../components/ContentAndImage';
import FwBgCenteredContent from '../components/FwBgCenteredContent';
import VideoBgFeature from '../components/VideoBgFeature';

export const componentToRender = (component, content) => {
  console.log(component);
  switch (component) {
    case 'ContentfulContentAndImage':
      return (
        <Suspense fallback={<div>Loading ContentAndImage...</div>}>
          <ContentAndImage content={content} />
        </Suspense>
      );
    case 'ContentfulSimpleCentered':
      return (
        <Suspense fallback={<div>Loading SimpleCentered...</div>}>
          <SimpleCentered content={content} />
        </Suspense>
      );
      case 'ContentfulPinnedScrollLayout':
        return (
          <Suspense fallback={<div>Loading SimpleCentered...</div>}>
            <PinnedScrollLayout content={content} />
          </Suspense>
        );
        case 'ContentfulFullWidthBackgroundImageCenteredContent':
          return (
            <Suspense fallback={<div>Loading SimpleCentered...</div>}>
              <FwBgCenteredContent content={content} />
            </Suspense>
          );
          case 'ContentfulFullWidthVideoBackground':
          return (
            <Suspense fallback={<div>Loading SimpleCentered...</div>}>
              <VideoBgFeature content={content} />
            </Suspense>
          );
    default:
      return '';
  }
};
  