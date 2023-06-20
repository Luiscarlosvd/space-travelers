import { render } from '@testing-library/react';
import Layout from '../components/Layout';
import { expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom';

test('Layout renders correctly', () => {
  const { component } = render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
  expect(component).toMatchSnapshot();
});