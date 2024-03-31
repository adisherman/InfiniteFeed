import React from 'react';
import {View} from 'react-native';
import {BottomMenuStyle as styles} from './BottomIcons.style';
import {BottomIconsTypes} from './BottomIcons.types';
import Icons from './Icons/Icons';
import {uuid} from 'common/Utils';

const BottomIcons = (props: BottomIconsTypes) => {
  const {iconsData, activeTab = 'Home'} = props;

  return (
    <View style={styles.mainBottomMenuContainer}>
      {iconsData.map(icon => {
        const isActive = icon.screenName === activeTab;
        return <Icons key={uuid(icon.icon)} {...icon} activeTab={isActive} />;
      })}
    </View>
  );
};

export default BottomIcons;
