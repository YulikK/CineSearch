import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './pagination.tsx';
import { customRender } from '../../tests/custom-render.tsx';
import { testGetParams, testRouterPush } from '../../tests/vitest.setup.ts';

const user = userEvent.setup();

describe('Pagination', () => {
  beforeEach(() => {
    testGetParams.mockClear();
    testRouterPush.mockClear();
  });

  it('renders correctly with middle page selected', () => {
    customRender(<Pagination page={1} totalPages={5} />);
    const page1Button = screen.getByRole('button', { name: '1' });
    expect(page1Button).toHaveClass('bg-primary text-primary-foreground');
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '4' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '5' })).toBeInTheDocument();
  });

  it('navigates to the previous page when the previous button is clicked', async () => {
    customRender(<Pagination page={2} totalPages={5} />);

    await user.click(screen.getByRole('button', { name: /previous page/i }));
    expect(testGetParams).toHaveBeenCalledWith('query');
    expect(testGetParams).toHaveBeenCalledWith('details');

    expect(testRouterPush).toHaveBeenCalledWith('/?page=1');
  });

  it('navigates to the next page when the next button is clicked', async () => {
    customRender(<Pagination page={3} totalPages={5} />);
    await user.click(screen.getByRole('button', { name: /next page/i }));
    expect(testGetParams).toHaveBeenCalledWith('query');
    expect(testGetParams).toHaveBeenCalledWith('details');

    expect(testRouterPush).toHaveBeenCalledWith('/?page=4');
  });

  it('navigates to the selected page when a page number is clicked', () => {
    customRender(<Pagination page={1} totalPages={5} />);
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    expect(testGetParams).toHaveBeenCalledWith('query');
    expect(testGetParams).toHaveBeenCalledWith('details');

    expect(testRouterPush).toHaveBeenCalledWith('/?page=3');
  });

  it('disables the previous button on the first page', () => {
    customRender(<Pagination page={1} totalPages={5} />);
    expect(
      screen.getByRole('button', { name: /previous page/i })
    ).toBeDisabled();
  });

  it('disables the next button on the last page', () => {
    customRender(<Pagination page={5} totalPages={5} />);
    expect(screen.getByRole('button', { name: /next page/i })).toBeDisabled();
  });
});
