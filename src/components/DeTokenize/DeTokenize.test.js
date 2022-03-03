import React from 'react';
import ReactDOM from 'react-dom';
import DeTokenize from './DeTokenize';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeTokenize />, div);
  ReactDOM.unmountComponentAtNode(div);
});