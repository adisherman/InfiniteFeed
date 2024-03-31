import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconsTypes} from './Icons.types';
import {IconsStyle as styles} from './Icons.style';
import {navigate} from 'navigation/navigationRef';

const Icons = (props: IconsTypes) => {
  const {icon, navigateTo, activeTab} = props;

  const activeIconStyle = activeTab && {tintColor: 'white'};

  const navigateToScreen = () => {
    !activeTab && navigate(navigateTo);
  };

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={navigateToScreen}>
      <Image source={icon} style={[styles.icon, activeIconStyle]} />
    </TouchableOpacity>
  );
};

export default Icons;
