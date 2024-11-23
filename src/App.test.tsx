import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', async () => {
   render(
      <BrowserRouter>
         <App />
      </BrowserRouter>
   );
   const header = await screen.findByTestId("Header");
   const sidebar = await screen.findByTestId("Sidebar");
   const main_content = await screen.findByTestId("Main_Content");
   expect(header).toBeInTheDocument();
   expect(sidebar).toBeInTheDocument();
   expect(main_content).toBeInTheDocument();
});
