import React from 'react';
import axios from 'axios';
import {render} from '@testing-library/react-native';

import Home from '../../../src/screens/Home/Home';

const HomeComponent = fn => fn(<Home />);

describe('Home component', () => {
  it('should render loading when home screen show', async () => {
    const component = await HomeComponent(render);
    const loadingComponent = await component.getByTestId('loading-label');

    expect(loadingComponent).toBeTruthy();
  });
});
