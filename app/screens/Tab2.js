import React from 'react';
import { Text } from 'react-native';
import { ContainerCentered } from '../components/styled/Shared';

const Tab2 = props => {
  console.log(props);
  return (
    <ContainerCentered>
      <Text>Tab2 container</Text>
    </ContainerCentered>
  );
};

export default Tab2;
