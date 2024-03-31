import {
  createNavigationContainerRef,
  DrawerActions,
} from '@react-navigation/native';
import {ScreensParamList} from './ScreenNames.types';

export const navigationRef = createNavigationContainerRef<ScreensParamList>();

export const navigate = (route: keyof ScreensParamList, params: any) => {
  if (navigationRef.isReady())
    navigationRef.navigate(route, {
      ...params,
    });
};

export const goBack = () => {
  if (navigationRef.isReady()) navigationRef.goBack();
};

export const openDrawer = () => {
  if (navigationRef.isReady())
    navigationRef.dispatch(DrawerActions.openDrawer());
};

export const closeDrawer = () => {
  if (navigationRef.isReady())
    navigationRef.dispatch(DrawerActions.closeDrawer());
};

export const getCurrentRouteName = () => {
  if (navigationRef.isReady()) return navigationRef.getCurrentRoute()?.name;
};

export const getCurrentRouteParams = () => {
  if (navigationRef.isReady()) return navigationRef.getCurrentRoute()?.params;
};
