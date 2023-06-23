import React from 'react';
import {View} from 'react-native';
import {makeCalendarCardContainerStyles} from './HeaderSection.style';
import {Icon, Text} from 'react-native-magnus';
import {useUserData} from '../../../contexts/UserDataProvider';

const HeaderSection = () => {
  const style = makeCalendarCardContainerStyles();
  const {nickName} = useUserData();

  return (
    <View style={style.headerContainer}>
      <View>
        <Text fontWeight="700" fontSize={32}>
          Hola
        </Text>
        <Text fontWeight="700" fontSize={32}>
          {nickName}!
        </Text>
      </View>
      <View style={style.rightSide}>
        <Icon rounded="circle" name="user" fontFamily="Feather" fontSize={64} />
        <Icon
          top={-16}
          name="cog"
          color="yellow700"
          fontSize="xl"
          fontFamily="FontAwesome"
        />
      </View>
    </View>
  );
};

export default HeaderSection;
