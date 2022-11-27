import React from 'react';
import {FlatList, View} from 'react-native';

import CharacterCard from '../../components/CharacterCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch';

const API = 'https://rickandmortyapi.com/api/character';
const Characters = ({navigation}) => {
  const {loading, data, error} = useFetch(API);

  const handleCharacterSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderCharacter = ({item}) => (
    <CharacterCard
      character={item}
      onSelect={() => handleCharacterSelect(item.id)}
    />
  );

  if (loading) {
    // return <ActivityIndicator size="large" />;
    return <Loading />;
  }

  if (error) {
    // return <Text>"Bir hata oluştu."</Text>;
    return <Error />;
  }

  return (
    <View>
      <FlatList
        data={data.results}
        renderItem={renderCharacter}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Characters;
