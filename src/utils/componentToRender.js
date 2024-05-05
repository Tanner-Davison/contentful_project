import React, { Suspense } from 'react';

// Lazy load the components
const ContentAndImage = React.lazy(() => import('../components/ContentAndImage'));
const SimpleCentered = React.lazy(() => import('../components/SimpleCentered'));
const PinnedScrollLayout = React.lazy(()=> import('../components/PinnedScrollLayout'))
const FwBgCenteredContent = React.lazy(()=> import('../components/FwBgCenteredContent'))
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
    default:
      return '';
  }
};
  