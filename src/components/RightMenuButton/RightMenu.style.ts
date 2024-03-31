import {StyleSheet} from 'react-native';
import { Colors } from 'common/Theme/Colors';

export const RightMenuStyle = StyleSheet.create({
  mainShapeContainer: {
    width: 20,
    height: 15,
    justifyContent: 'space-between',
  },
  outerShape: {
    width: '100%',
    height: 3,
    backgroundColor: Colors.hamburgerMenu,
    borderRadius: 2,
  },
  centerShape: {
    width: '80%',
    height: 3,
    backgroundColor: Colors.hamburgerMenu,
    alignSelf: 'flex-end',
    borderRadius: 2,
  },
});
