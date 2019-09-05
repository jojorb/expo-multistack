/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const tabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);

export default tabBarIcon;
