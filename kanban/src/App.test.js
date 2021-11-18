import React from "react"
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ReactDom from 'react-dom'

it('renders without crashing',()=>{
    const div=document.createElement('div');
     ReactDom.render(<App/>,div);
     ReactDom.unmountComponentAtNode(div);
});

test('renders Kanban Board ', () => {
  render(<App />);
  const spanElement = screen.getByText(/Kanban Board/);
  expect(spanElement).toBeInTheDocument();
});

// describe('Input value', () => {
//     it('updates on change', () => {
//       const setSearch = jest.fn((value) => {})
      
//       const { queryByPlaceholderText } = render(<App setInput={setInput}/>)
  
//       const searchInput = queryByPlaceholderText('Search')
  
//       fireEvent.change(searchInput, { target: { value: 'test' } })
  
//       expect(searchInput.value).toBe('test')
//     })
//   })

