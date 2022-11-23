import React from "react";
import {render, screen} from "@testing-library/react";
import ChessboardApp from "../../src/models/ChessboardApp";

describe.only('ChessboardApp', () => {
  test('should render empty board', () => {
    render(<ChessboardApp/>);

    expect(screen.getByTestId('board')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Example: A1A2')).toBeInTheDocument();
  });
});


//TODO Add more tests checking input text
// Error message when invalid move
// 