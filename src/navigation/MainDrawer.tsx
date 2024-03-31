import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import MainNavigator from './MainNavigation/MainNavigation';
import RightMenuBar from '../containers/RightMenuBar/RightMenuBar';

const drawerContentCallback = () => {
  return <RightMenuBar />;
};
const defaultScreensettings = {
  useLegacyImplementation: false,
  initialRouteName: 'Splash',
  drawerContent: drawerContentCallback,
};

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      {...defaultScreensettings}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: 'transparent',
        },
        overlayColor: 'rgba(255,255,255,0.7)',
      }}>
      <Drawer.Screen name="MainNavigator" component={MainNavigator} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
