import {Colors} from 'common/Theme/Colors';
import {getMainContentPadding} from 'common/Utils';
import {StyleSheet} from 'react-native';

export const mainContainerStyles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.nativeBackgroundColor,
  },
  mainView: {
    flex: 1,
    width: '100%',
    padding: getMainContentPadding(),
    paddingBottom: getMainContentPadding() / 4,
    overflow: 'visible',
  },
});
