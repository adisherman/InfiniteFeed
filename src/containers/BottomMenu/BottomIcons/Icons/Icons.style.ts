import {Colors} from 'common/Theme/Colors';
import {StyleSheet} from 'react-native';

export const IconsStyle = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 20,
    resizeMode: 'contain',
    tintColor: Colors.notActiveButton,
  },
});
