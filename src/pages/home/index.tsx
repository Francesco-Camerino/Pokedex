import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../components/card';

function Home() {
  return (
    <View>
      <Card titolo='Titolo' descrizione='descrizione' immagine='https://wallpaperaccess.com/full/5818306.jpg' links={[
        {
          testo: 'vai al pokedex',
          url: 'https://www.pokemon.com/it/pokedex/'
        }
      ]
      } />
    </View>
  );
}

export default Home;
