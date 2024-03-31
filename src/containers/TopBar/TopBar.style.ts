import { Colors } from 'common/Theme/Colors';
import {
  getScreenWidth
} from 'common/Utils';
import { StyleSheet } from 'react-native';

export const MainTopBarStyle = StyleSheet.create({
  mainViewContainer: {
    height: 68,
    width: getScreenWidth(),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.mainTopBar,
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
  },
  sideContainer: {    
    width: 20
  },
  logo: {
    resizeMode: 'contain',
    width: 15,
    height: 40,
    flex: 1,
  },
});
