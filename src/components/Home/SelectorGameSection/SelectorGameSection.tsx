import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {makeSelectorGameStyles} from './SelectorGameSection.style';
import Card from './Card/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native-magnus';
import useDataUser from '../../../hooks/useDataUser';

const SelectorGameSection = ({
  goToMirror,
  goToAsociation,
  goToRuleta,
}: {
  goToMirror: () => void;
  goToRuleta: () => void;
  goToAsociation: () => void;
}) => {
  const style = makeSelectorGameStyles();
  const {nickName} = useDataUser();

  return (
    <View style={style.selectorGameContainer}>
      <View style={style.titleContainer}>
        <Text fontWeight="700" fontSize={16}>
          Elige un juego
        </Text>
      </View>
      <View style={style.gamesGrid}>
        <View style={{flex: 0.5}}>
          <TouchableOpacity
            style={{flex: 1}}
            activeOpacity={0.4}
            onPress={goToMirror}>
            <Card
              style={{flex: 1}}
              color={'#AFECFE'}
              text={'Mirror'}
              icon={<Icon name="mirror" size={34} />}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.5, gap: 10}}>
          <TouchableOpacity
            style={{flex: 0.5}}
            activeOpacity={0.4}
            onPress={goToRuleta}>
            <Card
              style={{flex: 1}}
              color={'#BEAFFE'}
              text={'Ruleta'}
              icon={<Icon name="emoticon-tongue-outline" size={34} />}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 0.5}}
            activeOpacity={0.4}
            onPress={goToAsociation}>
            <Card
              style={{flex: 1}}
              color={'#FFD6AD'}
              text={'Asociacion'}
              icon={<Icon name="emoticon-tongue-outline" size={34} />}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectorGameSection;
