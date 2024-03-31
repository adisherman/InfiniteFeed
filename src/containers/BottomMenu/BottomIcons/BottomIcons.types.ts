export type BottomIconsTypes = {
  iconsData: icon[];
  activeTab?: string;
};

type icon = {
  icon: any;
  navigateTo: string;
  screenName: string;
};
