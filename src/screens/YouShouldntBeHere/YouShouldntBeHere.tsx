import {FlexColumn} from 'common/Components/StyledComponents/Containers';
import {Text16Bold} from 'common/Components/StyledComponents/StyledText';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import {StyleSheet} from 'react-native';

const YouShouldntBeHere = () => {
  return (
    <MainContainer>
      <FlexColumn style={{flex: 1, gap: 20}}>
        <Text16Bold>לא ציפיתי שתגיע לכאן</Text16Bold>
        <Text16Bold>אבל אם אתה כבר פה</Text16Bold>
        <Text16Bold>אז הנה בדיחה מ-gpt</Text16Bold>
        <Text16Bold eng>
          Why do React Native developers always seem calm? Because they know how
          to handle their state!
        </Text16Bold>
      </FlexColumn>
    </MainContainer>
  );
};

export default YouShouldntBeHere;

const styles = StyleSheet.create({});
