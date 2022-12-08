# Simple React Chessboard App

This project was built to encourage the exploration and implementation of different types of tests on a  [React](https://reactjs.org/) project by implementing the different rules of chess to a plain board.

Tests and tools included are:
- Unit tests with [Jest](https://jestjs.io/)
- Component tests with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Browser Automation tests with [Cypress](https://www.cypress.io/)
- Consumer Contract tests with [PactJS](https://pact.io/)

This project uses [Chessboardjsx](https://www.chessboardjsx.com/basics/start-position) as our starting board.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Branches

The code on the `main` branch is intentionally faulty, as the Pawn movement has a bug that can serve as a starting point for unit tests

The `develop` branch, on the other hand, has all four types of tests implemented and working

## Requirements

- Node v16+
- npm v8+

## Running the app

`npm install` will fetch all needed js libraries

`npm start` will, by default, start the app on localhost's port `3000`

`npm test` will run all available tests

### Authors
[David Corrales](mailto:m.david.corrales@gmail.com)
[Pamela Pluas](mailto:pamepluas@gmail.com)