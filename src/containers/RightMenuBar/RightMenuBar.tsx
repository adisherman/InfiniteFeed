import {
  FlexColumn,
  FlexRow,
  SpacerVertical,
} from 'common/Components/StyledComponents/Containers';
import {Text14Bold} from 'common/Components/StyledComponents/StyledText';
import {Colors} from 'common/Theme/Colors';
import Images from 'common/Theme/Images';
import {uuid} from 'common/Utils';
import Avatar from 'components/Avatar/Avatar';
import React from 'react';
import {Image, View} from 'react-native';
import NavigationButton from './NavigationButton';
import {RightMenuBarStyle as styles} from './RightMenuBar.style';
import {navigationButtons} from './navigationButtonList';
import userStore from 'store/userStore/userStore';

const RightMenuBarComponent = () => {
  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.mainMenuWindowContainer}>
        <View style={styles.avatarSection}>
          <Avatar image={userStore.avatar} big />
          <SpacerVertical size={10} />
          <Text14Bold color={Colors.white}>{userStore.userName}</Text14Bold>
        </View>
        <FlexColumn style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            {navigationButtons.map(button => {
              if (button.text === 'hr') {
                return <View key={uuid('navButton')} style={styles.hr} />;
              }
              return (
                <NavigationButton
                  key={uuid('navButton')}
                  onPress={button.onPress}
                  text={button.text}
                />
              );
            })}
          </View>
          <FlexRow style={styles.logoContainer}>
            <Image source={Images.logoText} style={styles.logo} />
          </FlexRow>
        </FlexColumn>
      </View>
    </View>
  );
};

export default RightMenuBarComponent;
