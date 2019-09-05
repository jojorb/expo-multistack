import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import Colors from './styled/Color';

const DrawHead = styled.View`
  padding: 0px;
  margin: 0px;
  background-color: ${Colors.HEX.drawerHeadBkg};
  margin-bottom: ${StatusBar.currentHeight * 0.77}px;
`;

const DrawInfo = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: ${Colors.HEX.white};
  text-align: center;
  padding-top: ${StatusBar.currentHeight}px;
  padding-bottom: ${StatusBar.currentHeight}px;
  text-transform: uppercase;
`;

const DrawerHeader = () => (
  <DrawHead>
    <DrawInfo>header</DrawInfo>
  </DrawHead>
);
export default DrawerHeader;
