import React from 'react';
import {Image, View} from 'react-native';
import RightMenuButton from 'components/RightMenuButton/RightMenu';
import {MainTopBarStyle as styles} from './TopBar.style';
import Images from 'common/Theme/Images';

const MainTopBarGeneral = () => {
  const SplashText = Images.logo;

  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.sideContainer}>
        <RightMenuButton />
      </View>
      <Image source={SplashText} style={styles.logo} />
      <View style={styles.sideContainer} />
    </View>
  );
};

export default MainTopBarGeneral;
