import {Colors} from 'common/Theme/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.35,
    borderRadius: 70,
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  bigAvatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
});
