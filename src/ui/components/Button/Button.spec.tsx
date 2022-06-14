import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('checks text(on) and icon(off) visibility when render Button without loading prop', () => {
    const { getByText, getByTestId } = render(<Button>Test text</Button>);
    expect(getByText('Test text')).toBeVisible();
    expect(getByTestId('progress-indicator-svg')).not.toBeVisible();
  });

  it('checks text(off) and icon(on) visibility when render Button with loading prop', () => {
    const { getByText, getByTestId } = render(
      <Button loading>Test text</Button>
    );
    expect(getByText('Test text')).not.toBeVisible();
    expect(getByTestId('progress-indicator-svg')).toBeVisible();
  });

  it('checks text accessibility when render Button with loading prop', () => {
    const { getByLabelText } = render(<Button loading>Test text</Button>);
    expect(getByLabelText('Test text')).toBeInTheDocument();
  });

  it('checks if button is enabled on Button with default props', () => {
    const { getByTestId } = render(
      <Button data-testid="button">Test text</Button>
    );
    expect(getByTestId('button')).toBeEnabled();
  });

  it('checks if button is disabled on Button with disabled prop', () => {
    const { getByTestId } = render(
      <Button data-testid="button" disabled>
        Test text
      </Button>
    );
    expect(getByTestId('button')).not.toBeEnabled();
  });
});
