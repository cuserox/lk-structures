import React from 'react';
import ReactDOM from 'react-dom';
import MainStructure from './MainStructure';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainStructure />, div);
  ReactDOM.unmountComponentAtNode(div);
});
