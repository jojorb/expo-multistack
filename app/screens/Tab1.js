import React from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ContainerCentered } from '../components/styled/Shared';
import ButtonStyled from '../components/styled/ButtonStyled';

const QUERY_USER = gql`
  query QUERY_USER {
    viewer {
      login
    }
  }
`;

const Tab1 = props => {
  console.log(props);
  return (
    <ContainerCentered>
      <Query query={QUERY_USER}>
        {({ loading, error, data }) => {
          console.log(data);
          return <Text>Github user: me</Text>;
        }}
      </Query>
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
