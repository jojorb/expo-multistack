import React from 'react';
import { Text } from 'react-native';
import { ContainerCentered } from '../components/styled/Shared';
import ButtonStyled from '../components/styled/ButtonStyled';

const WelcomeScreen = props => {
  console.log(props);
  return (
    <ContainerCentered>
      <Text>Welcome Screen</Text>
      <Text>click to go to dashbord/Tab1</Text>
      <ButtonStyled
        outline
        onPress={() => props.navigation.navigate('Dashboard')}
      >
        actions
      </ButtonStyled>
      <ButtonStyled onPress={() => props.navigation.navigate('Dashboard')}>
        actions
      </ButtonStyled>
      <ButtonStyled
        radius
        onPress={() => props.navigation.navigate('Dashboard')}
      >
        actions
      </ButtonStyled>
      <ButtonStyled
        loading
        onPress={() => props.navigation.navigate('Dashboard')}
      >
        actions
      </ButtonStyled>
    </ContainerCentered>
  );
};

export default WelcomeScreen;
