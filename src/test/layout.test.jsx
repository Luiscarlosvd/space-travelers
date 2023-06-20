import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

test('Layout renders correctly', () => {
  const { component } = render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>,
  );
  expect(component).toMatchSnapshot();
});