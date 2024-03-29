import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { makeGuideFeelScreenStyles } from './GuideFeelScreen.style';
import { Button, Text } from 'react-native-magnus';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GuideFeelType, HomeRoutes } from '../../stacks/HomeParams';

const GuideFeelScreen: FC<GuideFeelType> = ({ route, navigation }) => {
  const { emotion } = route.params;

  const style = makeGuideFeelScreenStyles();

  return (
    <View style={style.containerView}>
      <Text textAlign="center" fontSize={32}>
        Imagen instructivo ({emotion.displayname})
      </Text>
      {/* <Text fontSize={16} textAlign="center" mt={20}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet. </Text> */}
      <View style={style.imageContainer}>
        <Image source={emotion.pathGuia} style={style.image} />
      </View>
      <View style={style.floatingButtonContainer}>
        <Button
          bg="#130160"
          p="md"
          h={60}
          w={60}
          rounded="circle"
          onPress={() => navigation.navigate(HomeRoutes.REAL_FEEL, { emotion: emotion })}>
          <Icon name="arrow-right" size={34} color='white' />
        </Button>
      </View>
    </View>
  );
};

export default GuideFeelScreen;
