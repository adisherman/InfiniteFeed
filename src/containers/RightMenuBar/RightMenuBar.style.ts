import {Colors} from 'common/Theme/Colors';
import {getScreenHeight} from 'common/Utils';
import {StyleSheet} from 'react-native';

export const RightMenuBarStyle = StyleSheet.create({
  mainViewContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    backgroundColor: 'transparent',
    zIndex: 100,
  },
  mainMenuWindowContainer: {
    backgroundColor: Colors.mainRightBar,
    width: 227,
    height: getScreenHeight() - 60,
    paddingHorizontal: 20,
    paddingVertical: 33,
    borderTopStartRadius: 32,
    borderBottomStartRadius: 32,
  },
  avatarSection: {
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  navItem: {
    paddingVertical: 10,
  },
  hr: {
    width: 187,
    height: 1,
    backgroundColor: Colors.white,
    marginVertical: 20,
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
});
