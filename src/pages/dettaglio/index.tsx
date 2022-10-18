import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Card from '../../components/card';
import { StackParamList } from '../../components/elencoTab/elencoTab';


type Props = NativeStackScreenProps<StackParamList, 'Dettaglio'>;

function Dettaglio(props: Props) {
  const pokemon = props.route.params.pokemonParam;
  return (
    <ScrollView>
      <Card titolo={"Dettaglio " + pokemon.nome} descrizione={`Numero: ${pokemon.id}\n\nDescrizione: ${pokemon.descrizione}\n\nTipo: ${pokemon.tipo}\n\nMosse: ${pokemon.mosse}` } immagine={pokemon.immagine} />
    </ScrollView>

  );
}

export default Dettaglio;
