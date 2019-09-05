/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import Colors from './Color';

// accent: '#2D2A2A',
// highlight: '#515151',
// contrast: '#FAFAFA',
// loadingColor: '#c840dc',

const ButtonWarpper = styled.TouchableHighlight`
  border-color: ${props =>
    !props.outline ? Colors.HEX.contrast : Colors.HEX.accent};
  background-color: ${props =>
    props.outline ? Colors.HEX.contrast : Colors.HEX.accent};
  width: 75%;
  border-width: ${props => (!props.outline ? '0px' : '1px')};
  border-radius: ${props => (!props.radius ? '0px' : '25px')};
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ButtonText = styled.Text`
  color: ${props => (!props.outline ? Colors.HEX.contrast : Colors.HEX.accent)};
  font-weight: 700;
  font-size: 18;
  text-align: center;
  padding: ${props => (!props.outline ? '12px' : '11px')};
`;

const ButtonLoading = styled.View`
  color: ${props => (!props.outline ? Colors.HEX.contrast : Colors.HEX.accent)};
  font-weight: 700;
  font-size: 18;
  align-self: center;
  padding: ${props => (!props.outline ? '12px' : '11px')};
`;

const justWait = () => {
  console.log('wait...');
};

const Button = props => (
  <ButtonWarpper
    underlayColor={props.loading ? Colors.HEX.red : Colors.HEX.highlight}
    onPress={props.loading ? justWait : props.onPress}
    outline={props.outline}
    radius={props.radius}
  >
    {props.loading ? (
      <ButtonLoading>
        <ActivityIndicator size="small" color={Colors.HEX.loadingColor} />
      </ButtonLoading>
    ) : (
      <ButtonText outline={props.outline}>{props.children}</ButtonText>
    )}
  </ButtonWarpper>
);

export default Button;
