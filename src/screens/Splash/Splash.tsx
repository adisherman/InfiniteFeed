import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import userStore from 'store/userStore/userStore';
import {SplashProps, SplashRouteParamsList} from './Splash.types';
import SplashUi from './SplashUi';

const Splash = (props: SplashProps) => {
  const {navigation} = props;

  const route: RouteProp<SplashRouteParamsList, 'params'> = useRoute();

  const params = route?.params;
  const initialComponent = params && params.initialComponent;

  const navigateToFirstScreen = useCallback(() => {
    initialComponent && navigation.replace(initialComponent as never);
  }, [initialComponent, navigation]);

  useEffect(() => {
    setTimeout(() => {
      userStore.getUserData();
      navigateToFirstScreen();
    }, 2500);
  }, [navigateToFirstScreen]);

  return <SplashUi />;
};
export default Splash;
