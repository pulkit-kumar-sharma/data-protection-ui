import React, { lazy, Suspense } from 'react';

const LazyDeTokenize = lazy(() => import('./DeTokenize'));

const DeTokenize = props => (
  <Suspense fallback={null}>
    <LazyDeTokenize {...props} />
  </Suspense>
);

export default DeTokenize;
