import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {SplashStyles as splashStyles} from './Splash.style';
import Images from 'common/Theme/Images';

const SplashUi = () => {
  const SplashLogo = Images.splash;

  return (
    <View style={splashStyles.mainView}>
      <Image source={SplashLogo} style={splashStyles.mainImage} />
    </View>
  );
};

export default SplashUi;

const styles = StyleSheet.create({});
