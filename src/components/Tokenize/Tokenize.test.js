import React from 'react';
import ReactDOM from 'react-dom';
import Tokenize from './Tokenize';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tokenize />, div);
  ReactDOM.unmountComponentAtNode(div);
});