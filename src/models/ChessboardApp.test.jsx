import React from "react";
import {render} from "@testing-library/react";
import ChessboardApp from "../../src/models/ChessboardApp";

describe('ChessboardApp', () => {
  test('should render empty board', () => {
    const element = render(<ChessboardApp/>)
    const board = element.getAllByTestId('board')
    expect(board).toBeDefined()
  });
});