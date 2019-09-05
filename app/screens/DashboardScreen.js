import React from 'react';
import { Text, Button } from 'react-native';
import { ContainerCentered } from '../components/styled/Shared';

const DashboardScreen = props => {
  console.log(props);
  return (
    <ContainerCentered>
      <Text>Dashboard Screen</Text>
      <Button
        title="GO TO USER SCREEN"
        onPress={() => props.navigation.navigate('User')}
      />
    </ContainerCentered>
  );
};

export default DashboardScreen;
