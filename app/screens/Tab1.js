import React from 'react';
import { Text } from 'react-native';
import { ContainerCentered } from '../components/styled/Shared';
import ButtonStyled from '../components/styled/ButtonStyled';

const Tab1 = props => {
  console.log(props);
  return (
    <ContainerCentered>
      <Text>Tab1 container</Text>
      <Text>use the drawer panel or bottom tab</Text>
      <Text>or jump to an other screen</Text>
      <ButtonStyled onPress={() => props.navigation.navigate('User')}>
        go to the user screen
      </ButtonStyled>
    </ContainerCentered>
  );
};

export default Tab1;
