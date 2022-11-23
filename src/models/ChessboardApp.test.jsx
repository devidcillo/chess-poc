import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import ChessboardApp from "../../src/models/ChessboardApp";

describe('ChessboardApp', () => {

  test('should render empty board', () => {
    render(<ChessboardApp/>);

    expect(screen.getByTestId('board')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Example: a2a3')).toBeInTheDocument();
    expect(screen.queryByRole('heading', {name: 'Invalid move! Try a different move'})).toBeNull();
  });

  test('should render sucess message when users does valid move', () => {
    render(<ChessboardApp/>);

    userEvent.click(screen.getByRole('textbox'))
    userEvent.type(screen.getByRole('textbox'), 'a2a4');
    userEvent.type(screen.getByRole('textbox'), 'a2a4');
    userEvent.type(screen.getByRole('textbox'), '[Enter]');

    expect(screen.getByRole('heading', {name: 'Great move!'})).toBeInTheDocument()
    expect(screen.queryByRole('heading', {name: 'Invalid move! Try a different move'})).toBeNull();
  });

  test('should render error message when users does invalid move', () => {
    render(<ChessboardApp/>);

    userEvent.click(screen.getByRole('textbox'))
    userEvent.type(screen.getByRole('textbox'), 'a2b4');
    userEvent.type(screen.getByRole('textbox'), '[Enter]');

    expect(screen.getByRole('heading', {name: 'Invalid move! Try a different move'})).toBeInTheDocument()
    expect(screen.queryByRole('heading', {name: 'Great move!'})).toBeNull()
  });
});