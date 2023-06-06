import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {makeRealFeelScreenStyles} from './RealFeelScreen.style';
import {Button, Text} from 'react-native-magnus';
import {RealFeelType} from '../../stacks/HomeParams';
import {HomeRoutes} from '../../stacks/HomeParams';
const RealFeelScreen: FC<RealFeelType> = ({route, navigation}) => {
  const {emotion} = route.params;
  const style = makeRealFeelScreenStyles();

  return (
    <View style={style.containerView}>
      <Text style={{alignSelf: 'center'}} fontSize={32}>
        Imagen real ({emotion.name})
      </Text>
      <Text fontSize={16} textAlign="center" style={{marginTop: 20}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet.
      </Text>
      <Image source={emotion.pathReal} style={{alignSelf: 'center', flex: 1}} />
      <View style={style.calendarCardContainer}>
        <Button
          onPress={() =>
            navigation.navigate(HomeRoutes.PERFORM_EMOTION, {emotion: emotion})
          }>
          Ir a realizar emocion
        </Button>
      </View>
    </View>
  );
};

export default RealFeelScreen;