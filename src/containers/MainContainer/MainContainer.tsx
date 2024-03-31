import useOnUnmount from 'common/Hooks/useOnUnmount';
import BottomMenu from 'containers/BottomMenu/BottomMenu';
import {
  getCurrentRouteName,
  getCurrentRouteParams,
  navigationRef,
} from 'navigation/navigationRef';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {mainContainerStyles} from './MainContainer.style';
import {MainContainerProps} from './MainContainer.types';
import {ScreensParamList} from 'navigation/ScreenNames.types';

const MainContainer = (props: MainContainerProps) => {
  const {children, style} = props;

  const name = getCurrentRouteName();

  const [showFooter, setShowFooter] = useState<boolean | undefined>(false);
  const [routeName, setRouteName] = useState<string | undefined>(undefined);

  useEffect(() => {
    navigationRef.addListener('state', () => {
      const params =
        getCurrentRouteParams() as ScreensParamList[keyof ScreensParamList];
      const footerShown = params?.footerShown;
      name !== routeName && setRouteName(name);
      footerShown !== showFooter && setShowFooter(footerShown);
    });
  }, [showFooter]);

  useOnUnmount(() => {
    navigationRef.removeListener('state', () => {});
  });

  return (
    <View style={[style, {flex: 1}]}>
      <SafeAreaView style={mainContainerStyles.bg}>
        <View style={mainContainerStyles.mainView}>{children}</View>
      </SafeAreaView>
      <BottomMenu showFooter={showFooter} />
    </View>
  );
};

export default MainContainer;
