import Images from 'common/Theme/Images';
import {ScreenNames} from 'navigation/ScreenNames.types';
import {getCurrentRouteName} from 'navigation/navigationRef';
import React from 'react';
import {View} from 'react-native';
import BottomIcons from './BottomIcons/BottomIcons';
import {BottomMenuStyle as styles} from './BottomMenu.style';
import {BottomMenuProps} from './BottomMenu.types';

const BottomMenu = React.memo((props: BottomMenuProps) => {
  const {showFooter} = props;

  const currentRoute = getCurrentRouteName();

  const activeTab = currentRoute === 'mainDrawer' ? 'Main' : currentRoute;

  const iconsData = [
    {
      icon: Images.home,
      navigateTo: ScreenNames.Home,
      screenName: 'Home',
    },
    {
      icon: Images.searchUser,
      navigateTo: ScreenNames.YouShouldntBeHere,
      screenName: 'YouShouldntBeHere',
    },
    {
      icon: Images.chats,
      navigateTo: ScreenNames.YouShouldntBeHere,
      screenName: 'YouShouldntBeHere',
    },
    {
      icon: Images.live,
      navigateTo: ScreenNames.YouShouldntBeHere,
      screenName: 'YouShouldntBeHere',
    },
    {
      icon: Images.groups,
      navigateTo: ScreenNames.YouShouldntBeHere,
      screenName: 'YouShouldntBeHere',
    },
  ];

  if (!showFooter) {
    return null;
  }

  return (
    <View style={styles.mainBottomMenuContainer}>
      <BottomIcons iconsData={iconsData} activeTab={activeTab} />
    </View>
  );
});

export default BottomMenu;
