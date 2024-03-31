export type MainRightMenuBarProps = {
  navigation?: {
    closeDrawer: () => void;
  };
};

export type NavigationButtonTypes = {
  onPress: () => void;
  text: string;
};
