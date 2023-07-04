import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleLoginButton = () => {
    setAge(26);
  }

  const handleClear = () => {
    setName('');
    setAge(0)
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        style={{ backgroundColor: '#EEE', padding: 10 }}
        placeholder='Digite seu nome'
        placeholderTextColor={'#F4793B'}
        value={name}
        onChangeText={text => setName(text)}
      />

      {name != '' && <Text>Logado com {name} e tem {age} anos</Text>}

      {name != '' && <Button title='Limpar Tudo' onPress={handleClear} />}

      <Button title='Cadastrar' onPress={() => { handleLoginButton() }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
