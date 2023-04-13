import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
// import Footer, { socialLogos } from './Footer';
import SocialMedia from './SocialMedia';

/**
* @vitest-environment jsdom
*/

describe('SocialMedia', () => {

  test('links to the correct social media profiles', () => {
    render(
      /**
       * https://v5.reactrouter.com/web/guides/testing
       * Encontrado en la documentación de React Router.
       */
    <MemoryRouter>
      <SocialMedia />
    </MemoryRouter>
    
    
    );
    expect(screen.getByTestId('github-link')).toBeInTheDocument()
    expect(screen.getByTestId('linkedin-link')).toHaveAttribute('href', 'https://www.linkedin.com/in/eduardomirandagoya/');
    expect(screen.getByTestId('twitter-link')).toHaveAttribute('href', 'https://twitter.com/eduluchomg');

  });

})