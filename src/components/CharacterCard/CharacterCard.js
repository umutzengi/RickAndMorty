import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CharacterCard.style';

const CharacterCard = ({character, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: character.image}} />
        <View style={styles.body_container}>
          <Text style={styles.name}>{character.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CharacterCard;
