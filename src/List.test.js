import React from 'react';
import ReactDOM from 'react-dom';
import List from './List'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards= {[{title: 'titleHere', content: 'contentHere'}, {title: 'look at me', content: 'this new content'}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });