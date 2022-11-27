import React from 'react';
import {View, Text, Image} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import styles from './Detail.style';
const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.text_container}>
        <Text style={styles.text}>Name: {data.name}</Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>Status: {data.status}</Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>Species: {data.species}</Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>Gender: {data.gender}</Text>
      </View>
    </View>
  );
};

export default Detail;
