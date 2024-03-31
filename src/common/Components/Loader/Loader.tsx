import {Colors} from 'common/Theme/Colors';
import Images from 'common/Theme/Images';
import {getScreenHeight, getScreenWidth} from 'common/Utils';
import {observer} from 'mobx-react';
import {Image} from 'moti';
import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PostsStore from 'store/PostsStore/PostsStore';

const Loader = observer(() => {
  if (!PostsStore.isLoading) {
    return null;
  }
  return (
    <View>
      <Modal animationType="fade" transparent={true}>
        <LinearGradient
          colors={[
            Colors.transparent,
            Colors.modelBackground,
            Colors.modelBackground,
            Colors.modelBackground,
            Colors.modelBackground,
            Colors.modelBackground,
            Colors.modelBackground,
          ]}
          style={styles.centeredView}>
          <Image
            source={Images.logo}
            resizeMode="contain"
            style={styles.image}
            from={{
              transform: [{rotate: '0deg'}],
            }}
            animate={{
              transform: [{rotate: '360deg'}],
            }}
            transition={{
              type: 'timing',
              duration: 1000,
              loop: true,
              repeatReverse: false,
            }}
          />
        </LinearGradient>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  centeredView: {
    height: getScreenHeight(),
    width: getScreenWidth(),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  image: {
    width: 150,
  },
});

export default Loader;
