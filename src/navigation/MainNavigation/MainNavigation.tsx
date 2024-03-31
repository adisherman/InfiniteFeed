import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from '../ScreenNames.types';
import TopBar from 'containers/TopBar/TopBar';
import {Colors} from 'common/Theme/Colors';
import Home from 'screens/Home/Home';
import YouShouldntBeHere from 'screens/YouShouldntBeHere/YouShouldntBeHere';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const screenParams = [
    {
      name: ScreenNames.Home,
      component: Home,
      options: {
        headerShown: true,
        headerTitle: () => <TopBar />,
        headerBackVisible: false,
        headerStyle: {backgroundColor: Colors.safeAreaView},
      },
      initialParams: {
        footerShown: true,
      },
    },
    {
      name: ScreenNames.YouShouldntBeHere,
      component: YouShouldntBeHere,
      options: {
        headerShown: true,
        headerTitle: () => <TopBar />,
        headerBackVisible: false,
        headerStyle: {backgroundColor: Colors.safeAreaView},
      },
      initialParams: {
        footerShown: true,
      },
    },
  ];

  const MainNavAttributes = {
    initialRouteName: ScreenNames.Home,
    screenOptions: {
      headerShown: false,
      headerLeft: () => null,
    },
  };

  return (
    <Stack.Navigator {...MainNavAttributes}>
      {screenParams.map(screen => {
        return <Stack.Screen key={screen.name} {...screen} />;
      })}
    </Stack.Navigator>
  );
};

export default MainNavigator;
