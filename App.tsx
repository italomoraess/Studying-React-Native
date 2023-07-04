import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [nameField, setNameField] = useState('');

  const handleCadastroButton = () => {
    setName(nameField);
  }

  const handleClear = () => {
    setName('');
  }

  return (
    <View style={styles.container}>
      {name == '' &&
      <>
        <TextInput
          style={{ backgroundColor: '#EEE', padding: 10 }}
          placeholder='Digite seu nome'
          placeholderTextColor={'#F4793B'}
          value={nameField}
          onChangeText={text => setNameField(text)}
        />

        <Button title='Cadastrar' onPress={() => { handleCadastroButton() }} /> 
      </>
      }

      {name != '' && 
        <>
          <Text>Cadastrado com sucesso: {name}</Text>
          <Button title='Cadastrar Outro' onPress={handleClear} />
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
