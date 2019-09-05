import React from 'react';
import { Text } from 'react-native';
import { ContainerCentered } from '../components/styled/Shared';

const User = props => {
  console.log(props);
  return (
    <ContainerCentered>
      <Text>User</Text>
    </ContainerCentered>
  );
};

export default User;
