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
    expect(screen.queryByRole('heading', {name: 'Great move!'})).toBeNull();
  });
});