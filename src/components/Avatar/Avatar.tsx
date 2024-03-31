import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './Avatar.style';
import {avatarType} from './Avatar.types';
import Images from 'common/Theme/Images';

const Avatar = React.memo((props: avatarType) => {
  const {big, image} = props;

  const avatarImage = image
    ? {
        uri: image,
        headers: {
          Accept: '*/*',
        },
      }
    : Images.noProfile;
  const style = big ? styles.bigAvatar : styles.smallAvatar;
  return (
    <View style={styles.avatarContainer}>
      <Image style={style} source={avatarImage} resizeMode="cover" />
    </View>
  );
});

export default Avatar;
