import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'moti';
import Images from 'common/Theme/Images';
import {Colors} from 'common/Theme/Colors';

interface LikeButtonProps {
  onPress: () => void;
  isLiked: boolean;
}

const LikeButton = React.memo((props: LikeButtonProps) => {
  const {onPress, isLiked} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image
          source={Images.heart}
          style={{
            width: 15,
            height: 15,
            tintColor: Colors.black,
          }}
          animate={{
            tintColor: isLiked ? Colors.likeButton : Colors.black,
            scale: isLiked ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            duration: 200,
          }}
        />
      </View>
    </TouchableOpacity>
  );
});

export default LikeButton;

const styles = StyleSheet.create({});
