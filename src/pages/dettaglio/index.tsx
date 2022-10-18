import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import { StackParamList } from '../../../App';

type Props = NativeStackScreenProps<StackParamList, 'Dettaglio'>;

function Dettaglio(props: Props) {
  const pokemon = props.route.params.pokemonParam;
  return (
    <View>
      <Text>Dettaglio pokemon</Text>
      <Text>Id: {pokemon.id}</Text>
      <Text>Nome: {pokemon.nome}</Text>
      <Text>descrizione: {pokemon.descrizione}</Text>
      <Text>Tipo: {pokemon.tipo}</Text>
      <Text>Mosse: {pokemon.mosse}</Text>
    </View>
  );
}

export default Dettaglio;
