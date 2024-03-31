import {DrawerScreenProps} from '@react-navigation/drawer';
import {IconTypes} from 'common/TsModels/IconTypes.model';
import {ScreensParamList} from 'navigation/ScreenNames.types';

type ProfileScreenNavigationProp = DrawerScreenProps<
  ScreensParamList,
  'LoginWithFaceid'
>;
export type RightMenuBarProps = {
  value: string | undefined | JSX.Element;
  image?: IconTypes;
  onPress?: () => void;
  bold?: boolean;
  size?: number;
  navigation?: ProfileScreenNavigationProp;
};
