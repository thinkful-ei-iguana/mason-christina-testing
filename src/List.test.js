import React from 'react';
import ReactDOM from 'react-dom';
import List from './List'
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards= {[{title: 'titleHere', content: 'contentHere'}, {title: 'look at me', content: 'this new content'}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// it('renders the UI as expected', () => {
// const tree = renderer
//     .create(<List cards= {[{title: 'titleHere', content: 'contentHere'}, {title: 'look at me', content: 'this new content'}]}/>)
//     .toJSON();
// expect(tree).toMatchSnapshot();  
// });