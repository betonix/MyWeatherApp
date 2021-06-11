import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Button from '../../src/components/Button/Button';

const ButtonComponent = (fn, onPress) => fn(<Button onPress={onPress} />);

describe('Button component', () => {
  it('should call onPress fn when click button', async () => {
    const onPressMock = jest.fn();

    const {queryByTestId} = ButtonComponent(render, onPressMock);
    const onPressButton = await queryByTestId('button-id');

    fireEvent.press(onPressButton);

    expect(onPressMock).toBeCalled();
  });
});
