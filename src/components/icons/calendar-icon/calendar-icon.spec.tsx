import React from 'react';
import { render, screen } from '@testing-library/react';
import { CalendarIcon } from './calendar-icon.tsx';

describe('CalendarIcon', () => {
  it('renders successfully', () => {
    render(<CalendarIcon />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svgElement).toHaveAttribute('fill', 'none');
    expect(svgElement).toHaveAttribute('stroke', 'currentColor');
  });
});
