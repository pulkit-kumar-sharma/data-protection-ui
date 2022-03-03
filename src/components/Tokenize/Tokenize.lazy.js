import React, { lazy, Suspense } from 'react';

const LazyTokenize = lazy(() => import('./Tokenize'));

const Tokenize = props => (
  <Suspense fallback={null}>
    <LazyTokenize {...props} />
  </Suspense>
);

export default Tokenize;
