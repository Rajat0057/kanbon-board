import { render, screen } from '@testing-library/react';
 import React from "react";
 import board from '../Board';
// // import Board from "./Components/Board/Board"
test('renders learn react link', () => {
   render(<Board title="To Do"/>);
  const paragraphElement = screen.getByText(/title/i);
  expect(paragraphElement).toBeInTheDocument();

});


