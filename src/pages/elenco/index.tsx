import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {StackParamList} from '../../../App';
import { IPokemon } from '../../types/pokemon';
import styles from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Elenco'>;

function Elenco(props: Props) {
  const [elencoPokemon, setElencoPokemon] = useState<IPokemon[]>([]);

  const getElencoPokemon = () => {
    fetch('http://10.0.2.2:3004/pokemon').then(async result => {
      setElencoPokemon(await result.json());
    });
  };

  useEffect(() => {
    getElencoPokemon();
  }, []);

  const eliminaPokemon = (id: number) => {
    fetch('http://10.0.2.2:3004/pokemon/' + id, {
      method: 'DELETE',
    }).then(() => {
      // get lista aggiornata
      getElencoPokemon();
    });
  };

  const goToDettaglio = (pokemonParam: IPokemon) => {
    props.navigation.navigate('Dettaglio', {
      pokemonParam: pokemonParam,
    });
  }

  const renderItem = ({item}: {item: IPokemon}) => {
    return (
      <TouchableOpacity style={styles.row} onPress= {() => goToDettaglio(item)}>
        <Image style={styles.image} source={{uri: item.immagine}} />
        <Text style={styles.titolo}>{item.nome}</Text>
        <TouchableOpacity onPress={() => eliminaPokemon(item.id)}>
          <Text style={styles.elimina}>✖️</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return <FlatList data={elencoPokemon} renderItem={renderItem} />;
};

export default Elenco;
