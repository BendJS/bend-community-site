# Bend Community Site

[![Build Status](https://travis-ci.org/BendJS/bend-community-site.svg?branch=master)](https://travis-ci.org/BendJS/bend-community-site)
[![Maintainability](https://api.codeclimate.com/v1/badges/9852c0bd75839d08f1f9/maintainability)](https://codeclimate.com/github/BendJS/bend-community-site/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9852c0bd75839d08f1f9/test_coverage)](https://codeclimate.com/github/BendJS/bend-community-site/test_coverage)

## Overview

This site is meant to serve as a gathering place for the tech community in Bend, Oregon. Ideally, it will include at least the following:

* An Event Calendar
* A Local Jobs Board
* A Community Blog
* A Community Forum

## Contributing

Anyone is welcome to contribute, but if you have a direct connection to the BendJS community, even better. We're still working on the contribution guidelines, but don't let that stop you!

### React Development

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### Testing suite tech
* [react-testing-library](https://testing-library.com/docs/dom-testing-library/intro)

##### Example Test File

We would like to co-locate our unit tests near the component they are testing whenever possible in a new file named `<component-name>.test.js`

Below is a very basic example of our test suite. For information/inspiration please reference the tech references above

```js
// filename App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
describe('App', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app')).toMatchSnapshot();
  });
  it('renders the right link', () => {
    const { getByText } = render(<App />);
    expect(getByText('Learn React')).toBeVisible();
  });
});
```

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Storybook UI Library

UI component dev environment

```bash
 yarn storybook
 ```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).
