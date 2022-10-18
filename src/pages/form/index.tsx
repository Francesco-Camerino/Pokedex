import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IPokemon } from '../../types/pokemon';
import styles from './style';

function Form() {
  const [nome, setNome] = useState<string>('');
  const [descrizione, setDescrizione] = useState<string>('');
  const [tipo, setTipo] = useState<string>('');
  const [mosse, setMosse] = useState<string>('');
  const [immagine, setImmagine] = useState<string>('');

  const [formValid, setFormValid] = useState<boolean>(false);

  const salvaPokemon = () => {
    if (formValid) {
      fetch('http://10.0.2.2:3004/pokemon', {
        method: 'POST',
        body: JSON.stringify({
          nome: nome,
          descrizione: descrizione,
          tipo: tipo,
          mosse: mosse,
          immagine: immagine
        } as Omit<IPokemon, 'id'>), // tipizzo l'oggetto da salvare
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(async response => {
        const pokemonInserito: IPokemon = await response.json();
        console.log('pokemon inserito', pokemonInserito);
        /// ... cambiare pagina
        // .. svuotare il form
      });
    }
  };

  useEffect(() => {
    (nome && descrizione && tipo && mosse && immagine.startsWith('http')) && setFormValid(!formValid)
  }, [nome, descrizione, tipo, mosse, immagine]);

  return (
    <View>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Descrizione" value={descrizione} onChangeText={setDescrizione} />
      <TextInput style={styles.input} placeholder="Tipo" value={tipo} onChangeText={setTipo} />
      <TextInput style={styles.input}
        placeholder="Mosse"
        value={mosse}
        onChangeText={setMosse}
      />
      <TextInput style={styles.input}
        placeholder="URL immagine"
        value={immagine}
        onChangeText={setImmagine}
      />
      <TouchableOpacity style={[styles.button, formValid ? styles.validButton : styles.invalidButton]} onPress={salvaPokemon} disabled={!formValid} ><Text style={styles.buttonText}>Salva pokemon</Text></TouchableOpacity>
    </View>
  );
}

export default Form;
