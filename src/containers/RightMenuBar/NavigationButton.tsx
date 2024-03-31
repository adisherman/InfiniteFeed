import {Text12Bold} from 'common/Components/StyledComponents/StyledText';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationButtonTypes} from './MainRightMenuBar.types';
import {RightMenuBarStyle} from './RightMenuBar.style';
import {Colors} from 'common/Theme/Colors';

const NavigationButton = (props: NavigationButtonTypes) => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity style={RightMenuBarStyle.navItem} onPress={onPress}>
      <Text12Bold color={Colors.white}>{text}</Text12Bold>
    </TouchableOpacity>
  );
};

export default NavigationButton;
